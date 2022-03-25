import { useParams } from "react-router-dom";
import { Grid, Divider, Image } from "semantic-ui-react";
import Herotable from "../components/table";
import WinRateTable from "../components/winrateTable";
import Navbar from '../components/navbar'
import Footer from "../components/footer";
import { useEffect, useState } from 'react'
import Matchup from "../components/matchup";
import { GiPocketBow, GiCrossedSwords } from 'react-icons/gi';
import ItemList from "../components/ItemList";

function HeroPage(props) {
    const { id } = useParams()
    let hero;
    const [matchups, setMatchups] = useState([])


    useEffect(() => {
        const getData = async () => {
            const dataFromserver = await fetchMatchups();
            setMatchups(dataFromserver)
        }
        getData()
    }, [])

    const fetchMatchups = async () => {
        const res = await fetch(`https://api.opendota.com/api/heroes/${id}/matchups`)
        const json = await res.json();
        return json

    }


    props.data.map(function (item) {
        if (id == item.hero_id) {
            hero = item;
        }
        return item
    })


    const roles = hero.roles.map(function (item) {
        return item + "  ";
    })

    let sortData = matchups.sort(function (a, b) {
        const nameA = (a.wins * 100 / a.games_played)
        const nameB = (b.wins * 100 / b.games_played)
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }

        // names must be equal
        return 0;
    });

    let filterPositiveMatchups = sortData.filter(item => (item.wins * 100 / item.games_played) >= 50)
    let filterNegativeMatchups = sortData.filter(item => (item.wins * 100 / item.games_played) < 50)

    const positiveMatchup = filterPositiveMatchups.map(function (item) {
        return (
            <div key={item.hero_id}>
                <Matchup matchup={item} data={props.data}></Matchup>
                <Divider hidden />
            </div>
        )
    })

    const negativeMatchups = filterNegativeMatchups.map(function (item) {
        return (
            <div key={item.hero_id}>
                <Matchup matchup={item} data={props.data}></Matchup>
                <Divider hidden />
            </div>
        )
    })
    

    const imageURL = `http://cdn.dota2.com${hero.img}`

    return (
        <div>
            <Navbar></Navbar>
            <h1>{hero.localized_name}</h1>
            <br></br>
            <Image src={imageURL} centered></Image>
            <br></br>
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <h1>{roles}</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <h1>{hero.attack_type} {(hero.attack_type == 'Melee') ? <GiCrossedSwords /> : <GiPocketBow />}</h1>
            <h2>Base Stats</h2>
            <br></br>
            <Herotable heroData={hero}></Herotable>
            <br></br>
            <h2>Win Rate</h2>
            <WinRateTable heroData={hero}></WinRateTable>
            <br></br>
            <h2>Positive Matchups</h2>
            <br></br>
            <Grid textAlign="center" divided>
                {positiveMatchup}
            </Grid>
            <br></br>
            <h2>Negative Matchups</h2>
            <br></br>
            <Grid textAlign="center" divided>
                {negativeMatchups}
            </Grid>
            <br></br>
            <ItemList></ItemList>
            <br></br>
            <Footer></Footer>
        </div>
    )

}

export default HeroPage