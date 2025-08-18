-- Create the volunteers table
CREATE TABLE volunteers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  previous_activities TEXT,
  phone_number VARCHAR(20),
  state_of_origin VARCHAR(255),
  gender VARCHAR(10),
  state_of_residence VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable anonymous access
ALTER ROLE anon SET pgrst.db_anon_role = 'anon';
GRANT USAGE ON SCHEMA public TO anon;
GRANT SELECT, INSERT ON TABLE volunteers TO anon;