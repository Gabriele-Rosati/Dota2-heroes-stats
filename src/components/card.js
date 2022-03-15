import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import aa from '../images/Axe.jpg'

const style = {
    h1: {
      background: 'orange',
    }
  }

const HeroCard = (props) => {
    let url = `/hero/${props.data.localized_name}`; 
    const roles = props.data.roles.map(function(item) {
        return item + "  ";
    })
    return(
        <div className='heroCard'>       
            <Card style={style.h1}  id={props.data.id}>
            <Image src={aa} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{props.data.localized_name}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.data.attack_type}</span>
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