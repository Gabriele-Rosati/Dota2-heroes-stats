import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


async function getData(){
  let test = await fetch('https://api.opendota.com/api/heroStats');
  let data = await test.json();
  let test2 = await fetch('https://api.opendota.com/api/teams');
  let teamsData = await test2.json();
  let result = teamsData.filter(item => item.last_match_time > 1639928574);
  result = result.filter(item => item.logo_url != null)
  let test3 = await fetch('https://api.opendota.com/api/proPlayers');
  let proPlayers= await test3.json();

    ReactDOM.render(
    <React.StrictMode>
      <App data={data} teamsData={result} proPlayersData={proPlayers}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

getData();




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
