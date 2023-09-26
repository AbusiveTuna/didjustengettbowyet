import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: "postgresql://abusivetuna:test1233@coxbingodb.ccsjvwbnhbrj.us-east-1.rds.amazonaws.com:5432/abusivetuna",
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;