import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor () {
        super()
        this.input = React.createRef()
    }

    componentDidMount() {
        if(this.props.pos > 0) {
            this.input.current.focus()
        }
    }
    render() {
        return (
            <div className ={classes.Person}>
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.Age} years old</p>
                <p>{this.props.children}</p>
                <input type='text' onChange = {this.props.changed} value={this.props.name} ref={this.input}/>
            </div>
        )
    }
}
export default Person;