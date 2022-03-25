import { useParams } from "react-router-dom";
import { useEffect, useState} from 'react'
import Item from "./item";
import { Divider } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";

function ItemList() {

    const { id } = useParams()
    const [items, setItems] = useState([])
    const [itemPop, setitemPop] = useState({"start_game_items":{"11":86,"14":52,"16":165,"20":56,"27":1,"34":12,"42":8,"43":2,"44":88,"75":5,"181":30,"237":12},"early_game_items":{"3":18,"5":19,"22":4,"56":84,"57":5,"61":18,"63":50,"69":5,"125":18,"145":1,"569":20},"mid_game_items":{"24":97,"52":2,"53":1,"65":1,"108":5,"116":2,"123":4,"143":3,"145":67,"147":67,"154":2,"160":4,"162":2,"170":84,"174":27,"208":2,"247":1,"252":1},"late_game_items":{"108":14,"112":4,"116":23,"123":6,"135":4,"139":17,"147":10,"154":1,"156":3,"160":33,"208":22,"250":1,"271":3}})
    const [itemsData, setItemsData] = useState({})
    useEffect(() => {
        const getData = async () => {
            const dataItems = await fetchItems();
            const dataItemPopularity = await fetchItemPopularity();
            const dataItemsData = await fetchItemData();
            setitemPop(dataItemPopularity)
            setItems(dataItems)
            setItemsData(dataItemsData)
        }
        getData()
    }, [])

    const fetchItems = async () => {
        const res = await fetch(`https://raw.githubusercontent.com/odota/dotaconstants/master/build/item_ids.json`)
        const json = await res.json();
        return json
    }

    
    const fetchItemPopularity = async () => {
        const res = await fetch(`https://api.opendota.com/api/heroes/${id}/itemPopularity`)
        const json = await res.json();
        return json

    }

    const fetchItemData = async () => {
        const res = await fetch(`https://raw.githubusercontent.com/odota/dotaconstants/master/build/items.json`)
        const json = await res.json();
        return json

    }
    const keys1 = Object.keys(itemPop.start_game_items);
    const keys2 = Object.keys(itemPop.early_game_items);
    const keys3 = Object.keys(itemPop.mid_game_items);
    const keys4 = Object.keys(itemPop.late_game_items);

    const item1 = keys1.map(function (item) {
        return (
            <div key={keys1.indexOf(item)}>
                <Item pop={item} items={items} itemsData={itemsData}></Item>
                <Divider hidden />
            </div>
        )
    })
    const item2 = keys2.map(function (item) {
        return (
            <div key={keys2.indexOf(item)}>
                <Item pop={item} items={items} itemsData={itemsData}></Item>
                <Divider hidden />
            </div>
        )
    })
    const item3 = keys3.map(function (item) {
        return (
            <div key={keys3.indexOf(item)}>
                <Item pop={item} items={items} itemsData={itemsData}></Item>
                <Divider hidden />
            </div>
        )
    })
    const item4 = keys4.map(function (item) {
        return (
            <div key={keys4.indexOf(item)}>
                <Item pop={item} items={items} itemsData={itemsData}></Item>
                <Divider hidden />
            </div>
        )
    })

  return (
    <div>
        <h1>Items Popularity</h1>
        <h2>Start items:</h2>
        <Grid textAlign="center">
            {item1}
        </Grid>
        <h2>Early game items:</h2>
        <Grid textAlign="center">
            {item2}
        </Grid>
        <h2>Mid game items:</h2>
        <Grid textAlign="center">
            {item3}
        </Grid>
        <h2>Late game items:</h2>
        <Grid textAlign="center">
            {item4}
        </Grid>
    </div>
  )
}

export default ItemList