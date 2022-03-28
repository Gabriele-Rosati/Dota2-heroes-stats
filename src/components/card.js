import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { GiPocketBow, GiCrossedSwords } from 'react-icons/gi';

const style = {
    h1: {
      background: 'orange',
    }
  }

const HeroCard = (props) => {
    let url = `/heroes/${props.data.hero_id}`; 
    const imageURL = `http://cdn.dota2.com${props.data.img}`
    const roles = props.data.roles.map(function(item) {
        return item + "  ";
    })
    return(
        <div>       
            <Card style={style.h1}  id={props.data.id} className='heroCard'>
            <Image src={imageURL} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{props.data.localized_name}</Card.Header>
            <Card.Meta>
                <span className='date'> {(props.data.attack_type == 'Melee') ? <GiCrossedSwords/> : <GiPocketBow/>}</span>
            </Card.Meta>
            <Card.Description>
                {roles}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a href={url}>
                See stats
            </a>
            </Card.Content>
        </Card>
      </div>
    )

}



export default HeroCard