//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
class App extends Component {
  state = {
    characters : [
      {
        name: 'William',
        job: 'Engineer',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }
  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
   const {characters} = this.state
   return (
    <div className="container">
       <h1>Client Management</h1>
       <p>Add a character with a name and a job to the table.</p>
       <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
       />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
    </div>
  )
  }
}


export default App;
