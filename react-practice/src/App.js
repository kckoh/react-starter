
import Table from './Table.js'
import React, { Component } from 'react'
import Form from './Form.js'
class App extends Component {


    state = {
    characters: [
            {name:"kc",job:"software engineer"}

    ],
  }

    removeCharacter = (index)=>{
        const {characters} = this.state
        this.setState({
    characters: characters.filter((character, i) => {

      return i !== index
    }),
  })

    }

   handleSubmit = character => {
  this.setState({ characters: [...this.state.characters, character] })
}


  render() {
      const {characters} = this.state
    return (
        <div>
        < Table characters={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit = {this.handleSubmit} />
        </div>
    )
  }
}

export default App


