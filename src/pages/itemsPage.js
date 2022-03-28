import { useEffect, useState } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import Footer from '../components/footer'
import Item from '../components/item'
import LoaderExampleLoader from '../components/loader'
import Navbar from '../components/navbar'

function ItemsPage() {
    const [items, setItems] = useState('')
    useEffect(() => {
        const getData = async () => {
            const dataItems = await fetchItems();
            setItems(dataItems)
        }
        getData()
    }, [])

    const fetchItems = async () => {
        const res = await fetch(`https://raw.githubusercontent.com/odota/dotaconstants/master/build/items.json`)
        const json = await res.json();
        return json
    }



    const getDataResult = () => {
        if(items !== ''){
            const keys = Object.keys(items);
            let sortData = keys.sort(function (a, b) {
                const nameA = a.toUpperCase(); // ignore upper and lowercase
                const nameB = b.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
        
                // names must be equal
                return 0;
            });
            const item = sortData.map(function (item) {
                if(items[item].lore !== '' && items[item].dname !== "Aghanim's Blessing - Roshan" && items[item].dname !== "Aghanim's Shard - Roshan")
                return (
                    <div key={sortData.indexOf(item)}>
                        <Item itemName={sortData[sortData.indexOf(item)]}></Item>
                        <Divider hidden />
                    </div>
                )
            })
            return item
        }
        else{
            return (
                <LoaderExampleLoader></LoaderExampleLoader>
            )
        }
    }




  return (
    <div>
        <Navbar/>
        <h1>Items</h1>
        <hr></hr>
        <br></br>
        <Grid textAlign='center'>
            {getDataResult()}    
        </Grid>
        <br></br>
        <Footer/>
    </div>
  )
}

export default ItemsPage