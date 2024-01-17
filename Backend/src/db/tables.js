import pool from './db.js';

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS bingoTeams (
        id SERIAL PRIMARY KEY,
        teamname VARCHAR(50) UNIQUE NOT NULL,
        state TEXT,
        players JSON
      );
    `);
  } catch (err) {
    console.error(err);
  }
};

export default createTables;