import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
const style = {
    h1: {
      background: 'darkred',
    }
  }

const WinRateTable = (props) => (
  <Table celled style={style.h1}>
        <Table.Body>
        <Table.Row>
            <Table.Cell><h3>Bracket</h3></Table.Cell>
            <Table.Cell><h3>Number of picks</h3></Table.Cell>
            <Table.Cell><h3>Win Rate</h3></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Herald</Table.Cell>
            <Table.Cell>{props.heroData['1_pick']}</Table.Cell>
            <Table.Cell>{props.heroData['1_win'] * 100 / props.heroData['1_pick']} %</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Guardian</Table.Cell>
            <Table.Cell>{props.heroData['2_pick']}</Table.Cell>
            <Table.Cell>{props.heroData['2_win'] * 100 / props.heroData['2_pick']} %</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Crusader</Table.Cell>
            <Table.Cell>{props.heroData['3_pick']}</Table.Cell>
            <Table.Cell>{props.heroData['3_win'] * 100 / props.heroData['3_pick']} %</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Archon</Table.Cell>
            <Table.Cell>{props.heroData['4_pick']}</Table.Cell>
            <Table.Cell>{props.heroData['4_win'] * 100 / props.heroData['4_pick']} %</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Legend</Table.Cell>
            <Table.Cell>{props.heroData['5_pick']}</Table.Cell>
            <Table.Cell>{props.heroData['5_win'] * 100 / props.heroData['5_pick']} %</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Ancient</Table.Cell>
            <Table.Cell>{props.heroData['6_pick']}</Table.Cell>
            <Table.Cell>{props.heroData['6_win'] * 100 / props.heroData['6_pick']} %</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Divine</Table.Cell>
            <Table.Cell>{props.heroData['7_pick']}</Table.Cell>
            <Table.Cell>{props.heroData['7_win'] * 100 / props.heroData['7_pick']} %</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Immortal</Table.Cell>
            <Table.Cell>{props.heroData['8_pick']}</Table.Cell>
            <Table.Cell>{props.heroData['8_win'] * 100 / props.heroData['8_pick']} %</Table.Cell>
        </Table.Row>
        </Table.Body>
  </Table>
)

export default WinRateTable