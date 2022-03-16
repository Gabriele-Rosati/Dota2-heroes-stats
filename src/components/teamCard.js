import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import aa from '../images/Axe.jpg'

const style = {
    h1: {
      background: 'orange',
    }
  }

const TeamCard = (props) => {
     let url = `/teams/${props.data.team_id}`; 
    return(
        <div className='heroCard'>       
            <Card style={style.h1}  id={props.data.id}>
            <Image src={props.data.logo_url} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.data.tag}</span>
            </Card.Meta>
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



export default TeamCard