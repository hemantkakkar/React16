import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedclasses = [];
    let btnClass = ''
    if(props.showPersons) {
        btnClass = classes.Red
    }

    if(props.persons.length <= 2) {
      assignedclasses.push(classes.red);
    }

    if(props.persons.length <= 1) {
      assignedclasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Hi, it is a react app</h1>
            <p className={assignedclasses.join(' ')}>This is working</p>
            <button 
            className={btnClass}
            onClick = {props.clicked}>
            Switch Name
            </button>
        </div>
    )
}

export default cockpit;