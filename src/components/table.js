import React from 'react'
import { Statistic } from 'semantic-ui-react'


const HeroTable = (props) => (
  <div>
  <Statistic.Group widths='three' size='small'>
    <Statistic>
    <Statistic.Value>{props.heroData.base_agi} + {props.heroData.agi_gain}</Statistic.Value>
    <Statistic.Label>Agility</Statistic.Label>
    </Statistic>

    <Statistic>
    <Statistic.Value >{props.heroData.base_str} + {props.heroData.str_gain}</Statistic.Value>
    <Statistic.Label>Strength</Statistic.Label>
    </Statistic>

    <Statistic>
    <Statistic.Value>{props.heroData.base_int} + {props.heroData.int_gain}</Statistic.Value>
    <Statistic.Label>Intelligence</Statistic.Label>
    </Statistic>
  </Statistic.Group>
  <br></br>
  <Statistic.Group widths='three' size='small'>
    <Statistic>
    <Statistic.Value>{props.heroData.base_armor}</Statistic.Value>
    <Statistic.Label>Armor</Statistic.Label>
    </Statistic>

    <Statistic>
    <Statistic.Value >{props.heroData.base_health}</Statistic.Value>
    <Statistic.Label>Health</Statistic.Label>
    </Statistic>

    <Statistic>
    <Statistic.Value>{props.heroData.base_health_regen}</Statistic.Value>
    <Statistic.Label>Health Regen</Statistic.Label>
    </Statistic>
  </Statistic.Group>
  <br></br>
  <Statistic.Group widths='three' size='small'>
    <Statistic>
    <Statistic.Value>{props.heroData.move_speed}</Statistic.Value>
    <Statistic.Label>Movement Speed</Statistic.Label>
    </Statistic>

    <Statistic>
    <Statistic.Value >{props.heroData.base_attack_min} - {props.heroData.base_attack_max}</Statistic.Value>
    <Statistic.Label>Damage</Statistic.Label>
    </Statistic>

    <Statistic>
    <Statistic.Value>{props.heroData.attack_range}</Statistic.Value>
    <Statistic.Label>Attack range</Statistic.Label>
    </Statistic>
  </Statistic.Group>
  </div>
  
)

export default HeroTable

{/* <Table celled fixed textAlign='center' style={style.h1}>
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
</Table> */}