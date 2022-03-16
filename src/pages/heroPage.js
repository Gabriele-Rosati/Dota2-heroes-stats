import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import  Herotable from "../components/table";
import WinRateTable from "../components/winrateTable";
import Navbar from '../components/navbar'
function HeroPage(props) {
    const {name} = useParams()
    console.log(name)
    let hero;
    props.data.map(function(item) {
        if(name == item.localized_name){
            hero = item;
            return
        }
    })
    console.log(hero)
    const roles = hero.roles.map(function(item) {
        return item + "  ";
    })
    


    return (
        <div>
            <Navbar></Navbar>
            <h1>{hero.localized_name}</h1>
            <br></br>
            <Grid>
            <Grid.Row columns={1}>
            <Grid.Column>
                <h1>{roles}</h1>
            </Grid.Column>
            </Grid.Row>
            </Grid>
            <h2>Base Stats</h2>
            <Herotable heroData={hero}></Herotable>
            <br></br>
            <h2>Win Rate</h2>
            <WinRateTable heroData={hero}></WinRateTable>
        </div>
    )

}

export default HeroPage