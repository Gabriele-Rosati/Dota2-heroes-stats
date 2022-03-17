import HeroCard from '../components/card'
import { Grid, Divider, Header } from 'semantic-ui-react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


function Home(props) {
    console.log(props.data[1].localized_name)
    console.log( props.data.length)
    let sortData = props.data.sort(function(a, b) {
        const nameA = a.localized_name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.localized_name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
    const cards = sortData.map(function(item) {
        return (
            <div key={item.id}>   
                    <HeroCard data={item}></HeroCard>
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
            <Grid stackable textAlign='center'>
                {cards}
            </Grid>
            <br></br>
            <Footer></Footer>
        </div>
    )

}

export default Home