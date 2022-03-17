import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const style = {
    h1: {
      background: 'orange',
    }
  }

const TeamCard = (props) => {
     let url = `/teams/${props.data.team_id}`; 
    return(
        <div>       
            <Card style={style.h1} id='teamCard'>
            <Image size='massive' src={props.data.logo_url}/>
            <Card.Content>
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.data.tag}</span>
            </Card.Meta>
            <Card.Description>
                Games played: {props.data.rating}
            </Card.Description>
            <Card.Description>
                Games played: {props.data.wins}
            </Card.Description>
            <Card.Description>
                Games played: {props.data.losses}
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



export default TeamCard