
import Table from './Table.js'
import React, { Component } from 'react'
import Form from './Form.js'
class App extends Component {


    state = {
    characters: [
        {name: "Charlie",job: "doctor"}

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

  render() {
      const {characters} = this.state
    return (
        <div>
        < Table characters={characters} removeCharacter={this.removeCharacter} />
        <Form/>
        </div>
    )
  }
}

export default App


