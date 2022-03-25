import HeroCard from '../components/card'
import { Grid, Divider, Header } from 'semantic-ui-react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Button, Input } from 'semantic-ui-react'
import { useState } from 'react'


function Heroes(props) {

    const [heroes, setHeroes] = useState(props.data)
    const carry = 'Carry'
    const support = 'Support'

    let sortData = heroes.sort(function (a, b) {
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
    const cards = sortData.map(function (item) {
        return (
            <div key={item.id}>
                <HeroCard data={item}></HeroCard>
                <Divider hidden />
            </div>
        )
    })

    const filterHeroes = (role) => {
        let newSortData = props.data.filter(item => (filter(item, role)))
        setHeroes(newSortData)
    }

    const filter = (item, role) => {
        for (let i = 0; i < item.roles.length; i++) {
            if (item.roles[i] === role) {
                return item
            }
        }
    }

    const search = (e) => {
        if (e.key === 'Enter') {
            let inputVal = document.getElementById("test").value;
            if (inputVal === 'anti mage') {
                let amFilter = props.data.filter(item => item.localized_name == 'Anti-Mage')
                setHeroes(amFilter)
            }
            else {


                let filter = props.data.filter(item => (filterName(item, inputVal)))
                if (filter.length !== 0) {
                    setHeroes(filter)

                }
                else {
                    let errorFilter = [{ "localized_name": "no heroes found", "roles": [], "img": "/apps/dota2/images/dota_react/heroes/antimage.png?", "icon": "/apps/dota2/images/dota_react/heroes/icons/antimage.png?", "base_health": 200, "base_health_regen": 0.25, "base_mana": 75, "base_mana_regen": 0, "base_armor": 0, "base_mr": 25, "base_attack_min": 29, "base_attack_max": 33, "base_str": 21, "base_agi": 24, "base_int": 12, "str_gain": 1.6, "agi_gain": 2.8, "int_gain": 1.8, "attack_range": 150, "projectile_speed": 0, "attack_rate": 1.4, "move_speed": 310, "turn_rate": null, "cm_enabled": true, "legs": 2, "hero_id": 1, "turbo_picks": 380046, "turbo_wins": 192004, "pro_ban": 434, "pro_win": 65, "pro_pick": 139, "1_pick": 34185, "1_win": 16613, "2_pick": 51839, "2_win": 25436, "3_pick": 57549, "3_win": 28239, "4_pick": 46704, "4_win": 23003, "5_pick": 27527, "5_win": 13149, "6_pick": 12310, "6_win": 5849, "7_pick": 5602, "7_win": 2654, "8_pick": 2044, "8_win": 962, "null_pick": 2129127, "null_win": 0 }]
                    setHeroes(errorFilter)
                }
            }
        }
    }

    const filterName = (item, value) => {
        const arr = value.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str = arr.join(" ");
        if (item.localized_name === str) {
            return item
        }
    }

    return (
        <div>
            <Navbar/>
            <Header as='h1'>Dota Heroes</Header>
            <h2>Filter by position:</h2>
            <Button onClick={() => filterHeroes(carry)} color='black'>Carry</Button>
            <Button onClick={() => filterHeroes(support)} color='black'>Support</Button>
            <Button onClick={() => setHeroes(props.data)} color='black'>All</Button>
            <h2>Search hero</h2>
            <Input icon='search' placeholder='Search Hero...' onKeyPress={search} id='test' />
            <hr></hr>
            <br></br>
            <Grid stackable textAlign='center'>
                {cards}
            </Grid>
            <br></br>
            <Footer/>
        </div>
    )

}

export default Heroes