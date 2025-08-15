-- 1. Drop existing tables and functions to ensure a clean slate.
DROP TABLE IF EXISTS public.attendees_individual CASCADE;
DROP TABLE IF EXISTS public.attendees_company CASCADE;
DROP TABLE IF EXISTS public.exhibitors CASCADE;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

-- 2. Create the attendees_individual table.
CREATE TABLE public.attendees_individual (
    id UUID NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    phone TEXT,
    thematic_areas JSONB,
    interests TEXT[]
);

-- Create the attendees_company table.
CREATE TABLE public.attendees_company (
    id UUID NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    company_name TEXT,
    industry_type TEXT,
    website TEXT,
    socials TEXT,
    contact_person TEXT,
    contact_person_role TEXT
);

-- 3. Create the exhibitors table.
CREATE TABLE public.exhibitors (
    id UUID NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    company_name TEXT,
    email TEXT,
    industry TEXT,
    website TEXT
);

-- 4. Create a function to automatically copy user metadata to the correct table.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    IF new.raw_user_meta_data ->> 'type' = 'exhibitor' THEN
        INSERT INTO public.exhibitors (id, company_name, email, industry, website)
        VALUES (new.id, new.raw_user_meta_data ->> 'company-name', new.email, new.raw_user_meta_data ->> 'industry', new.raw_user_meta_data ->> 'website');
    ELSIF new.raw_user_meta_data ->> 'type' = 'attendee_company' THEN
        INSERT INTO public.attendees_company (id, company_name, industry_type, website, socials, contact_person, contact_person_role)
        VALUES (new.id, new.raw_user_meta_data ->> 'company_name', new.raw_user_meta_data ->> 'industry_type', new.raw_user_meta_data ->> 'website', new.raw_user_meta_data ->> 'socials', new.raw_user_meta_data ->> 'contact_person', new.raw_user_meta_data ->> 'contact_person_role');
    ELSE -- Default to individual attendee
        INSERT INTO public.attendees_individual (id, full_name, phone, thematic_areas, interests)
        VALUES (new.id, new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'phone', (new.raw_user_meta_data ->> 'thematic_areas')::jsonb, ARRAY(SELECT jsonb_array_elements_text((new.raw_user_meta_data ->> 'interests')::jsonb)));
    END IF;
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Create a trigger to execute the function when a new user is created.
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 6. Enable Row Level Security for the new tables.
ALTER TABLE public.attendees_individual ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendees_company ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exhibitors ENABLE ROW LEVEL SECURITY;

-- 7. Create policies to allow users to see their own data.
CREATE POLICY "Allow individual access to individual attendees"
ON public.attendees_individual
FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Allow individual access to company attendees"
ON public.attendees_company
FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Allow individual access to exhibitors"
ON public.exhibitors
FOR SELECT
USING (auth.uid() = id);