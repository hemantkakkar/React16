import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
            return <Person  
            key = {person.id}
            name = {person.name} 
            pos = {index}
            Age={person.age}
            click = {() => this.props.clicked(index)}
            changed = {(ev) => this.props.changed(ev, person.id)}
            />
          })
    }
}


export default Persons;