import React from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = { monsters: [], searchQuery: '' };
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    this.setState({ monsters: users });
  }

  handleSearchChange = event =>
    this.setState({ searchQuery: event.target.value });

  render() {
    const { monsters, searchQuery } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
