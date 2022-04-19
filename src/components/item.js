import { Image, Card } from "semantic-ui-react"
import { useEffect, useState } from 'react'
import LoaderExampleLoader from "./loader"

const style = {
    h1: {
      background: 'purple',
    },
    h2: {
        height: '200px',
    },
    image: {
        height: '100%',
        width: '100%',
    }
  }

function Item(props) {

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

    const item = items[props.itemName]


    if (item === undefined) {
        return (
            <LoaderExampleLoader></LoaderExampleLoader>
        )
    }
    else {
        const imageURL = `https://cdn.cloudflare.steamstatic.com${item['img']}`
        const href = `/items/${props.itemName}`
        return (
            <div>
                <Card style={style.h1} id='itemCard'>
                    <div style={style.h2}>
                    <Image src={imageURL} id='itemImage' style={style.image}/>
                    </div>
                    
                    <Card.Content>
                        <Card.Header>{item['dname']}</Card.Header>
                        <Card.Description>
                           Cost: {item.cost}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href={href}>
                            See details
                        </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}


export default Item