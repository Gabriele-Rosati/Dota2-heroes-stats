import { Image } from "semantic-ui-react"

function Item(props) {

    let imageURL;
    let name;
    const test = props.itemsData[props.items[props.pop]]


    if(test === undefined){
        imageURL = '';
        name = '';
    }
    else{
        imageURL = `https://cdn.cloudflare.steamstatic.com${test['img']}`
        name = test;
    }

  return (
    <div>
        <Image src={imageURL} as='a' href="/"/>
        <p>{name['dname']}</p>
    </div>
  )
}

export default Item