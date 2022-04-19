import { List, Image, Table } from "semantic-ui-react"

function HeroMatches(props) {
    let radiantTeam = props.radiant_team.split(',')
    let radiant = props.data.filter(item => (item.id === parseInt(radiantTeam[0]) || item.id === parseInt(radiantTeam[1]) || item.id === parseInt(radiantTeam[2]) || item.id === parseInt(radiantTeam[3]) || item.id === parseInt(radiantTeam[4])))
    let direTeam = props.dire_team.split(',')
    let dire = props.data.filter(item => (item.id === parseInt(direTeam[0]) || item.id === parseInt(direTeam[1]) || item.id === parseInt(direTeam[2]) || item.id === parseInt(direTeam[3]) || item.id === parseInt(direTeam[4])))
    const direImg = dire.map(function (item) {
        const imageURL = `http://cdn.dota2.com${item.img}`
        const href = `/heroes/${item.id}`
        return (
            <Image as='a' href={href} src={imageURL} key={item.id}/>
        )
    })
    const radiantImg = radiant.map(function (item) {
        const imageURL = `http://cdn.dota2.com${item.img}`
        const href = `/heroes/${item.id}`
        return (
            <Image as='a' href={href} src={imageURL} key={item.id}/>
        )
    })
    return (
        <div>
            <Table celled padded inverted textAlign="center" color="violet">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine><h3>Radiant</h3></Table.HeaderCell>
                        <Table.HeaderCell singleLine><h3>Match Details</h3></Table.HeaderCell>
                        <Table.HeaderCell singleLine><h3>Dire</h3></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Image.Group size="small">
                                {radiantImg}
                            </Image.Group>
                        </Table.Cell>
                        <Table.Cell>
                            <List>
                                <h3>{props.matchDetails.radiant_win ? 'Radiant Victory' : 'Dire Victory'}</h3>
                                <h3>Average MMR: {props.matchDetails.avg_mmr}</h3>
                                <h3>MatchID: {props.matchDetails.match_id}</h3>
                            </List>
                        </Table.Cell>
                        <Table.Cell>
                            <Image.Group size="small">
                                {direImg}
                            </Image.Group>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <br />
        </div>
    )
}

export default HeroMatches