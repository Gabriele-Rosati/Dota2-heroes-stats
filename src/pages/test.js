import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Roster from '../components/Roster'
import RecentMatches from "../components/recentMatches";


class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], tag: this.props.tag, players: [], matchData: this.props.matchData, teamData:this.props.teamData};
  }

  async componentDidMount() {
    let test = await fetch(`https://api.opendota.com/api/teams/${this.state.tag}/players`);
    let aaa = await test.json();
    let result = aaa.filter(item => (item.name != null));
    let result2 = result.filter(item => (item.is_current_team_member !== false))
    function isPlayer(item){
      for(let i=0;i<result2.length;i++){
        if(item.account_id === result2[i].account_id){
          return true
        }
      }
    } 
    let playersData = this.props.players.filter(isPlayer);
    result2 = result2.sort(function(a,b) {
      return a.account_id - b.account_id
    })
    playersData = playersData.sort(function(a, b) {
      return a.account_id - b.account_id
    })
    this.setState({data: result2})
    this.setState({players: playersData})
  }

  render() {
    
    return (
        <div>
            <h1>Current Roster</h1>
            <br></br>
            <Roster data={this.state.data} players={this.state.players}></Roster>
            <RecentMatches teamData={this.state.teamData} matchData={this.state.matchData}></RecentMatches>
      </div>
    )
  }
}

export default TestPage;