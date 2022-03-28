import { Image } from "semantic-ui-react"

function HeroItem(props) {

    let imageURL;
    let name;
    let href;
    const test = props.itemsData[props.items[props.pop]]

    if(test === undefined){
        imageURL = '';
        name = '';
    }
    else{
        imageURL = `https://cdn.cloudflare.steamstatic.com${test['img']}`
        name = test;
        href= `/items/${props.items[props.pop]}`
    }

  return (
    <div>
        <Image src={imageURL} as='a' href={href}/>
        <p>{name['dname']}</p>
    </div>
  )
}

export default HeroItem