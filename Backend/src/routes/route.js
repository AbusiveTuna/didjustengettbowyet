import { Router } from 'express';
import pool from '../db/db.js';

const router = Router();

router.get('/fetchBoards', async (req, res) => {
    const { teamNames } = req.query;
    try {
      const { rows } = await pool.query('SELECT * FROM bingoTeams WHERE teamname = ANY($1::varchar[])', [teamNames]);
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching the boards.' });
    }
  });  
  
  router.post('/updateBoard', async (req, res) => {
    const { teamName, tileStates } = req.body;
    try {
      await pool.query('UPDATE bingoTeams SET state = $1 WHERE teamname = $2', [JSON.stringify(tileStates), teamName]);
      res.status(200).json({ message: 'Board updated successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while updating the board.' });
    }
  });

  router.get('/templeData', async (req, res) => {
    try {
      const response = await axios.get('https://templeosrs.com/api/competition_info.php?id=23792');
      const data = response.data;
  
      const teamXP = {};
  
      data.participants.forEach(participant => {
        const teamName = participant.team_name;
  
        if (!teamXP[teamName]) {
          teamXP[teamName] = 0;
        }
  
        teamXP[teamName] += participant.xp_gained;
      });
  
      res.json(teamXP);
    } catch (error) {
      console.log('An error occurred while fetching the data:', error);
      res.status(500).json({ error: 'An error occurred while fetching the data.' });
    }
  });
  


export default router;