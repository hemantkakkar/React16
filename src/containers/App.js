import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.toggleHandler = this.toggleHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.state = {
      persons: [
        {
          id : 1, name:'Max', age: 28
        },
        {
          id : 2, name:'Manu', age: 29
        },
        {
          id : 3, name:'Devina', age: 24
        }
      ],
      showPerson: false
    }
  }

deleteHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons]
  persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  toggleHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  nameHandler = (ev, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id  === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = ev.target.value;
    console.log(person)
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState ({
      persons: persons
    })

  }

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
          <Persons persons={this.state.persons} clicked={this.deleteHandler} changed={this.nameHandler}/>
      );

      }


    return (
      <div className={classes.App}>
          <Cockpit showPerson={this.state.showPerson} persons={this.state.persons} clicked={this.toggleHandler}/>
          {
            persons
          }
      </div>
    );
  }
}

export default App;
