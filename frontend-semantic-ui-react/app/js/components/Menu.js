import React from 'react';
import { Header, Menu as SemanticMenu, Input } from 'semantic-ui-react';


export default class Menu extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <SemanticMenu secondary>
          <Header className={'item'}>STM</Header>
          <br />
          <SemanticMenu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <SemanticMenu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <SemanticMenu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <SemanticMenu.Menu position='right'>
            <SemanticMenu.Item>
              <Input icon='search' placeholder='Search...' />
            </SemanticMenu.Item>
            <SemanticMenu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </SemanticMenu.Menu>
        </SemanticMenu>
    )
  }
}
