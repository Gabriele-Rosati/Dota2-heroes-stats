import React from 'react'
import { Table } from 'semantic-ui-react'
const style = {
    h1: {
      background: 'darkred',
    }
  }

  function strip(number) {
    return (parseFloat(number).toPrecision(4));
}

const WinRateTable = (props) => (
  <Table fixed celled style={style.h1} textAlign='center'>
        <Table.Body>
        <Table.Row>
            <Table.Cell><h3>Bracket</h3></Table.Cell>
            <Table.Cell><h3>Number of picks</h3></Table.Cell>
            <Table.Cell><h3>Win Rate</h3></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><h4>Herald</h4></Table.Cell>
            <Table.Cell><h4>{props.heroData['1_pick']}</h4></Table.Cell>
            <Table.Cell><h4>{strip(props.heroData['1_win'] * 100 / props.heroData['1_pick'])} %</h4></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><h4>Guardian</h4></Table.Cell>
            <Table.Cell><h4>{props.heroData['2_pick']}</h4></Table.Cell>
            <Table.Cell><h4>{strip(props.heroData['2_win'] * 100 / props.heroData['2_pick'])} %</h4></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><h4>Crusader</h4></Table.Cell>
            <Table.Cell><h4>{props.heroData['3_pick']}</h4></Table.Cell>
            <Table.Cell><h4>{strip(props.heroData['3_win'] * 100 / props.heroData['3_pick'])} %</h4></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><h4>Archon</h4></Table.Cell>
            <Table.Cell><h4>{props.heroData['4_pick']}</h4></Table.Cell>
            <Table.Cell><h4>{strip(props.heroData['4_win'] * 100 / props.heroData['4_pick'])} %</h4></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><h4>Legend</h4></Table.Cell>
            <Table.Cell><h4>{props.heroData['5_pick']}</h4></Table.Cell>
            <Table.Cell><h4>{strip(props.heroData['5_win'] * 100 / props.heroData['5_pick'])} %</h4></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><h4>Ancient</h4></Table.Cell>
            <Table.Cell><h4>{props.heroData['6_pick']}</h4></Table.Cell>
            <Table.Cell><h4>{strip(props.heroData['6_win'] * 100 / props.heroData['6_pick'])} %</h4></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><h4>Divine</h4></Table.Cell>
            <Table.Cell><h4>{props.heroData['7_pick']}</h4></Table.Cell>
            <Table.Cell><h4>{strip(props.heroData['7_win'] * 100 / props.heroData['7_pick'])} %</h4></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><h4>Immortal</h4></Table.Cell>
            <Table.Cell><h4>{props.heroData['8_pick']}</h4></Table.Cell>
            <Table.Cell><h4>{strip(props.heroData['8_win'] * 100 / props.heroData['8_pick'])} %</h4></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell><h4>Turbo</h4></Table.Cell>
            <Table.Cell><h4>{props.heroData['turbo_picks']}</h4></Table.Cell>
            <Table.Cell><h4>{strip(props.heroData['turbo_wins'] * 100 / props.heroData['turbo_picks'])} %</h4></Table.Cell>
        </Table.Row>
        </Table.Body>
  </Table>
)

export default WinRateTable