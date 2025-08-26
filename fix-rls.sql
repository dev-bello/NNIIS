-- Fix RLS policies for registration tables
-- Run this script in your Supabase SQL editor

-- Enable RLS on tables (if not already enabled)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exhibitors ENABLE ROW LEVEL SECURITY;

-- For registrations table
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.registrations;
DROP POLICY IF EXISTS "Allow anonymous select" ON public.registrations;
DROP POLICY IF EXISTS "Allow anonymous update" ON public.registrations;

-- Create comprehensive policies for registrations table
CREATE POLICY "Allow anonymous insert" ON public.registrations
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "Allow anonymous select" ON public.registrations
    FOR SELECT TO anon
    USING (true);

CREATE POLICY "Allow anonymous update" ON public.registrations
    FOR UPDATE TO anon
    USING (true)
    WITH CHECK (true);

-- For exhibitors table
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.exhibitors;
DROP POLICY IF EXISTS "Allow anonymous select" ON public.exhibitors;
DROP POLICY IF EXISTS "Allow anonymous update" ON public.exhibitors;

-- Create comprehensive policies for exhibitors table
CREATE POLICY "Allow anonymous insert" ON public.exhibitors
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "Allow anonymous select" ON public.exhibitors
    FOR SELECT TO anon
    USING (true);

CREATE POLICY "Allow anonymous update" ON public.exhibitors
    FOR UPDATE TO anon
    USING (true)
    WITH CHECK (true);

-- Grant necessary permissions to anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT SELECT, INSERT, UPDATE ON public.registrations TO anon;
GRANT SELECT, INSERT, UPDATE ON public.exhibitors TO anon;

-- Grant sequence permissions for auto-incrementing IDs
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;

-- Alternative: If you want to completely disable RLS (less secure but simpler)
-- Uncomment the lines below if the above policies don't work

-- ALTER TABLE public.registrations DISABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.exhibitors DISABLE ROW LEVEL SECURITY;