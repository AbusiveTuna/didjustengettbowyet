import { Router } from 'express';
import pool from '../db/db.js';
import axios from 'axios';

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

  router.get('/templeDataAll', async (req, res) => {
    const skills = [39, 40, 66, 85, 93, 94];
    const baseUrl = 'https://templeosrs.com/api/competition_info.php?id=23801&skill=';
  
    try {
      const requests = skills.map(skill => axios.get(`${baseUrl}${skill}`));
      const responses = await Promise.all(requests);
  
      const results = responses.reduce((acc, response, index) => {
        const skill = skills[index];
        const data = response.data.data;
        const teamXP = {};
  
        for (const teamName in data.teams) {
          teamXP[teamName] = data.teams[teamName].team_gain;
        }
  
        acc[skill] = teamXP;
        return acc;
      }, {});
  
      res.json(results);
    } catch (error) {
      console.log('An error occurred while fetching the data:', error);
      res.status(500).json({ error: 'An error occurred while fetching the data.' });
    }
  });

export default router;