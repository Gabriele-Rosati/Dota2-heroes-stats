import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




async function getData(){
  const today = new Date();
  const timestamp = Math.floor(today.getTime() / 1000);
  let test = await fetch('https://api.opendota.com/api/heroStats');
  let data = await test.json();
  let test2 = await fetch('https://api.opendota.com/api/teams');
  let teamsData = await test2.json();
  let result = teamsData.filter(item => item.last_match_time > (timestamp - 2592000));
  result = result.filter(item => item.logo_url != null)
  let test3 = await fetch('https://api.opendota.com/api/proPlayers');
  let proPlayers= await test3.json();

    ReactDOM.render(
      <App data={data} teamsData={result} proPlayersData={proPlayers}/>,
    document.getElementById('root')
  );
}

getData();

