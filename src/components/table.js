import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
const style = {
    h1: {
      background: 'darkred',
    }
  }

const HeroTable = (props) => (
  <Table celled style={style.h1}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Agility {props.heroData.base_agi} + {props.heroData.agi_gain}</Table.Cell>
        <Table.Cell>Strength {props.heroData.base_str} + {props.heroData.str_gain}</Table.Cell>
        <Table.Cell>Intelligence {props.heroData.base_int} + {props.heroData.int_gain}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Base Armor {props.heroData.base_armor}</Table.Cell>
        <Table.Cell>Base Health {props.heroData.base_health}</Table.Cell>
        <Table.Cell>Base Health Regen {props.heroData.base_health_regen}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Base Movement Speed {props.heroData.move_speed}</Table.Cell>
        <Table.Cell>Base Damage ({props.heroData.base_attack_min} - {props.heroData.base_attack_max})</Table.Cell>
        <Table.Cell>Attack Range {props.heroData.attack_range}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default HeroTable