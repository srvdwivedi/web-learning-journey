import React, { Component } from 'react';

// In the below code when you click on `Change Name-1` button you will see the old state being printed in console
// But the name in UI shows updated name as David

// This concept is about the setState which is a async process and the console.log() runs in sync mode due to which
// console show the old state. The setSatte makes a shallow merge and updates the key which is present in the state object.

// To resole this we pass a fucntion in setState & a callback to print change in console
// So, the callback runs after the async code i.e setState

// Check the flow for Change Name-2 

class PrintName extends Component {

    constructor() {
        super()

        this.state = {
            name: 'Jackson'
        }
    }

    render() {
        return (
            <>
                <h1> {this.state.name} </h1>

                <button onClick={() => {
                    this.setState({ name: 'David' })

                    console.log('STATE:', this.state)
                }}> Change Name - 1 </button>
                {' '}
                <button onClick={() => {
                    this.setState( ()=> {
                        return {name : 'Andrew'}
                    }, () => {
                        console.log('STATE: ', this.state)
                    })
                }}> Change Name - 2 </button>
            </>
            
        )
    }
}

export default PrintName;