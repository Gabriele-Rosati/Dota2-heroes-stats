import Navbar from '../components/navbar'
import TeamCard from '../components/teamCard'
import { Grid, Divider, Header, Container } from 'semantic-ui-react'

function Teams(props) {
    const teamCard = props.teamsData.map(function(item) {
        return (
            <div>
                    <TeamCard data={item} key={item.id}></TeamCard>
                    <Divider hidden />
            </div>
        )
    })
    return(
        <div>
            <Navbar></Navbar>
            <Header as='h1'>Dota Heroes</Header>
            <hr></hr>
            <br></br>
            <Grid stackable>
                {teamCard}
            </Grid>
        </div>
    )

}

export default Teams