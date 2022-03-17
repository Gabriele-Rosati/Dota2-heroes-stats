import Navbar from '../components/navbar'
import TeamCard from '../components/teamCard'
import { Grid, Divider, Header } from 'semantic-ui-react'
import Footer from '../components/footer';

function Teams(props) {
    let sortData = props.teamsData.sort(function(a, b) {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
    const teamCard = sortData.map(function(item) {
        return (
            <div key={item.team_id}>
                    <TeamCard data={item}></TeamCard>
                    <Divider hidden />
            </div>
        )
    })
    return(
        <div>
            <Navbar></Navbar>
            <Header as='h1'>Dota Teams</Header>
            <hr></hr>
            <br></br>
            <Grid centered stackable>
                {teamCard}
            </Grid>
            <br></br>
            <Footer></Footer>
        </div>
    )

}

export default Teams