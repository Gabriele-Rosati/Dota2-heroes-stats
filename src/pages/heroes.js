import HeroCard from '../components/card'
import { Grid, Divider, Header } from 'semantic-ui-react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Button, Input } from 'semantic-ui-react'
import { useState } from 'react'


function Heroes(props) {

    const [heroes, setHeroes] = useState(props.data)
    const [message, setMessage] = useState('')
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
                setMessage('')
            }
            else {


                let filter = props.data.filter(item => (filterName(item, inputVal)))
                if (filter.length !== 0) {
                    setHeroes(filter)
                    setMessage('')

                }
                else {
                    let errorFilter = []
                    setHeroes(errorFilter)
                    setMessage('No Heroes found')
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
            {(message !== '') ? <h1>{message}</h1> : null}
            <br></br>
            <Footer/>
        </div>
    )

}

export default Heroes