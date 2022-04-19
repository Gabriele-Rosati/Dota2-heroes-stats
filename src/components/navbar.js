import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='navbar'>
        <Menu inverted size='large' fixed='top'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            href='/'
          >
            Home
          </Menu.Item>

          <Menu.Item
            name='teams'
            active={activeItem === 'teams'}
            onClick={this.handleItemClick}
            href='/teams'
          >
            Teams
          </Menu.Item>

          <Menu.Item
            name='heroes'
            active={activeItem === 'heroes'}
            onClick={this.handleItemClick}
            href='/heroes'
          >
            Heroes
          </Menu.Item>

          <Menu.Item
            name='items'
            active={activeItem === 'items'}
            onClick={this.handleItemClick}
            href='/items'
          >
            Items
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

