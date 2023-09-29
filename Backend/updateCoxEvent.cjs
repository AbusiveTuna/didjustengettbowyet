const axios = require('axios');
const delay = ms => new Promise(res => setTimeout(res, ms));

const processPlayer = async (player) => {
    let playerName = player.trim();  // remove any leading/trailing whitespace

    // check if the last character is a comma and remove it
    if (playerName.slice(-1) === ',') {
        playerName = playerName.slice(0, -1);
    }

    await axios.get(`https://www.templeosrs.com/php/add_datapoint.php?player=${playerName}`)
        .then(response => {
            console.log(`Sent GET request for player: ${playerName}`);
        })
        .catch(error => {
            console.error(`Error for player: ${playerName}, error: ${error}`);
        });

    await delay(10000); // Wait for 10 seconds
}

const processGroupMembers = async () => {
    const groupUrl = 'https://templeosrs.com/api/competition_info.php?id=23801';

    await axios.get(groupUrl)
        .then(async response => {
            const players = response.data.data.participants;
            for(let player of players) {
                await processPlayer(player.username);
            }
            console.log('Players from the group API successfully processed');
        })
        .catch(error => {
            console.error(`Error fetching group members: ${error}`);
        });
}

processGroupMembers();
