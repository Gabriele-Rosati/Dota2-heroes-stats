import { Grid } from "semantic-ui-react"
import { Table, Image } from "semantic-ui-react"
import './style.css'

function Match(props) {
    const time = props.data.duration;
    const minutes = Math.floor(time / 60)
    const matchURL= `https://it.dotabuff.com/matches/${props.data.match_id}`
    const teamURL = `/teams/${props.teamData.team_id}`
    const teamURL2 = `/teams/${props.data.opposing_team_id}`
    let unix_timestamp = props.data.start_time;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes2 = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();
    console.log(date)
    return(
        <div>
            <Table fixed celled inverted textAlign="center" color={(props.data.radiant_win == props.data.radiant) ? 'green' : 'red'}>
                <Table.Row>
                    <Table.Cell>
                        <Image src={props.data.radiant ? props.teamData.logo_url : props.data.opposing_team_logo} size='medium' centered id='tableImage'></Image>
                        <h2><a href={props.data.radiant ? teamURL : teamURL2}>{props.data.radiant ? props.teamData.name : props.data.opposing_team_name}</a></h2>
                        
                    </Table.Cell>
                    <Table.Cell>
                        <Grid centered>
                            <Grid.Row>
                                <h2>{(props.data.radiant_win == props.data.radiant) ? 'Win' : 'Loss'} </h2>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>Tournament: {props.data.league_name}</h3>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>MatchId: {props.data.match_id}</h3>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>Duration: {minutes}:{((time - minutes * 60) < 10) ? '0' : ''}{time - minutes * 60}</h3>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>Date: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h3>
                            </Grid.Row>
                            <Grid.Row>
                                <a href={matchURL}>See match details</a>
                            </Grid.Row>
                        </Grid>
                    </Table.Cell>
                    <Table.Cell>
                    <Image src={props.data.radiant ? props.data.opposing_team_logo :  props.teamData.logo_url} size='medium' centered id='tableImage'></Image>
                    <h2><a href={props.data.radiant ? teamURL2 : teamURL }>{props.data.radiant ? props.data.opposing_team_name : props.teamData.name}</a></h2>            
                    </Table.Cell>
                </Table.Row>
            </Table>
            {/* <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Radiant</Table.HeaderCell>
                    <Table.HeaderCell>Result</Table.HeaderCell>
                    <Table.HeaderCell>Dire</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>{props.data.radiant ? props.teamData.name : props.data.opposing_team_name}</Table.Cell>
                    <Table.Cell>{(props.data.radiant_win == props.data.radiant) ? 'W' : 'L'}</Table.Cell>
                    <Table.Cell>{props.data.radiant ? props.data.opposing_team_name : props.teamData.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>{props.data[1].radiant ? props.teamData.name : props.data[1].opposing_team_name}</Table.Cell>
                    <Table.Cell>{(props.data[1].radiant_win == props.data[1].radiant) ? 'W' : 'L'}</Table.Cell>
                    <Table.Cell>{props.data[1].radiant ? props.data[1].opposing_team_name : props.teamData.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>{props.data[2].radiant ? props.teamData.name : props.data[2].opposing_team_name}</Table.Cell>
                    <Table.Cell>{(props.data[2].radiant_win == props.data[2].radiant) ? 'W' : 'L'}</Table.Cell>
                    <Table.Cell>{props.data[2].radiant ? props.data[2].opposing_team_name : props.teamData.name}</Table.Cell>
                </Table.Row>
                </Table.Body>

                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                        </Menu.Item>
                    </Menu>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table> */}
        </div>
    )
}

export default Match