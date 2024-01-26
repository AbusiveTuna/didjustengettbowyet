import { Router } from 'express';
import pool from '../db/db.js';
import axios from 'axios';

const router = Router();

router.get('/fetchBoards', async (req, res) => {
  const { teamNames } = req.query;
  try {
    for (const teamName of teamNames) {
      const teamExists = await checkTeam(teamName);
      console.log(teamExists);
      if (teamExists.rows.length < 1) {
        await pool.query('INSERT INTO bingoTeams (teamname, state) VALUES ($1, $2)', [teamName, JSON.stringify([])]); // Assuming default state is an empty array
      }
    }
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
      const teamExists = await checkTeam(teamName);
      console.log(teamExists);
      if (teamExists.rows.length > 0) {
        await pool.query('UPDATE bingoTeams SET state = $1 WHERE teamname = $2', [JSON.stringify(tileStates), teamName]);
      } else {
        await pool.query('INSERT INTO bingoTeams (teamname, state) VALUES ($1, $2)', [teamName, JSON.stringify(tileStates)]);
      }
      res.status(200).json({ message: 'Board updated successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while updating the board.' });
    }
  });

  router.post('/updateTeams', async (req, res) => {
    const { teamName, players } = req.body;

    try {
      if(checkTeam(teamName)){
        await pool.query('UPDATE bingoTeams SET players = $1 WHERE teamname = $2', [JSON.stringify(players), teamName]);
      }
      res.status(200).json({ message: 'Board updated successfully.' });
      
    } catch (err) {
      res.status(500).json({ error: 'An error occured while updating teams'});
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

  async function checkTeam(teamName){
    return await pool.query('SELECT * FROM bingoTeams WHERE teamname = $1', [teamName]);
  }

export default router;
