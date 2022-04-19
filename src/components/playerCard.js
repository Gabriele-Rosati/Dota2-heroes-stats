import { Card, Image } from 'semantic-ui-react'

const style = {
    h1: {
      background: 'purple',
    }
  }

function PlayerCard(props) {
      function strip(number) {
        return (parseFloat(number).toPrecision(4));
    }
    return(
        <div>       
            <Card style={style.h1}  id={props.data.account_id}>
            <Image src={props.data.avatarfull} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Meta>
                <span className='date'>Role: {props.data.fantasy_role}</span>
            </Card.Meta>
            <Card.Description>
                Games played: {props.player.games_played}
            </Card.Description>
            <Card.Description>
                Wins: {props.player.wins}
            </Card.Description>
            <Card.Description>
               Win rate: {strip(props.player.wins * 100 / props.player.games_played)} %
            </Card.Description>
            <Card.Description>
                Country: {props.data.loccountrycode}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a href={props.data.profileurl}>
                See steam profile
            </a>
            </Card.Content>
        </Card>
      </div>
    )
}

export default PlayerCard