// Backend/config/db.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres.lerzcumnybjpexgmttty",
    host: "aws-0-us-east-1.pooler.supabase.com",
    database: "postgres",
    password: "CalivsAmerica123",
    port: 5432,
});

export { pool };