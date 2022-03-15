import Card from '../components/card'
import _ from 'lodash'
import Axe from '../images/Axe.jpg'
import AntiMage from '../images/anti-mage.jpg'
import { Grid, Divider, Header, Container } from 'semantic-ui-react'
import Navbar from '../components/navbar'


function Home(props) {
    console.log(props.data[1].localized_name)
    console.log( props.data.length)
    const cards = props.data.map(function(item) {
        return (
            <div>
                    <Card data={item} key={item.id}></Card>
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
                {cards}
            </Grid>
        </div>
    )

}

export default Home