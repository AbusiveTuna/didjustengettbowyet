import pool from './db.js';

const createTables = async () => {
  try {

    await pool.query(`
    CREATE TABLE IF NOT EXISTS bingoTeams (
        id SERIAL PRIMARY KEY,
        teamname VARCHAR(50) UNIQUE NOT NULL,
        state TEXT NOT NULL
      );
    `);

    await pool.query(`
    INSERT INTO bingoTeams (teamname, state) VALUES ('Goose's Gringos', $1)
    ON CONFLICT (teamname) DO NOTHING;
  `, [JSON.stringify(Array(12).fill(false))]);

    await pool.query(`
        INSERT INTO bingoTeams (teamname, state) VALUES ('MX and the Arcanes', $1)
        ON CONFLICT (teamname) DO NOTHING;
    `, [JSON.stringify(Array(12).fill(false))]);

} catch (err) {
    console.error(err);
  }
};

export default createTables;