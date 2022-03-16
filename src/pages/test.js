import React, { Component } from "react";


class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], tag: this.props.tag};
  }

  async componentDidMount() {
    let test = await fetch(`https://api.opendota.com/api/teams/${this.state.tag}/players`);
    let aaa = await test.json();
    let result = aaa.filter(item => (item.name != null));
    const result2 = result.filter(item => (item.is_current_team_member != false))
    this.setState({data: result2})
    console.log(this.state.data)  
  }

  render() {
    return (
        <div>
            <h1>Current Roster</h1>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.name} - games played: {el.games_played} 
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TestPage;