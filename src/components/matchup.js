import { Image, Card, Icon } from 'semantic-ui-react'
import image from '../images/anti-mage.jpg'

function Matchup(props) {
    // console.log(props.matchup)
    // console.log(props.data) 

    const style = {
      h1: {
        background: 'green',
      },
      h2: {
        background: 'red',
      }
    }
    function strip(number) {
        return (parseFloat(number).toPrecision(4));
    }
    
    let filterData = props.data.filter(item => item.hero_id == props.matchup.hero_id)
    let url = `/heroes/${filterData[0].hero_id}`;
    return(
      <Card style={(props.matchup.wins * 100 / props.matchup.games_played >= 50) ? style.h1 : style.h2}>
      <Card.Content>
        <Image
          size='small'
          src={image}
        />
        <Card.Header>{filterData[0].localized_name}</Card.Header>
        <Card.Description>
          Win rate: {strip(props.matchup.wins * 100 / props.matchup.games_played)} %
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
         <a href={url}>
          See stats
        </a>
      </Card.Content>
    </Card>
    )
}

export default Matchup