import PlayerCard from "./playerCard"
import { Divider } from "semantic-ui-react"
import { Grid } from "semantic-ui-react";

function Roster(props) {
    let j = -1;
    const playerCard = props.players.map(function(item) {
        j = j + 1;
        return (
            <div key={item.account_id}>
                    <PlayerCard data={item} player={props.data[j]}></PlayerCard>
                    <Divider hidden />
            </div>
        )
    })
    return(
        <div>
            <Grid textAlign="center">
                {playerCard}
            </Grid>
        </div>
    )
}

export default Roster