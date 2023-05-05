import React, { Component } from "react";

class PrintApiResponse extends Component {

    constructor() {
        super();

        this.state = {
            result: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState(() => {
                return { result: users }
            }, ()=> console.log('Success')))
    }

    render() {
        return (

            <>

                <p> USER LISITNG :</p>

                {this.state.result.map(item => {
                    return <p key={item.id} onClick={() => console.log('Will Handle to Change name')}> {item.name} </p>
                })}

            </>

        )
    }
}

export default PrintApiResponse;