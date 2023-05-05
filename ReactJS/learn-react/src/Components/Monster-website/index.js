import React, { Component } from "react";

class Monsters extends Component {

    constructor() {
        super();

        this.state = {
            result: [],
            searchString: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState(() => {
                return { result: users }
            }))
    }

    render() {

        const filterdUsers = this.state.result.filter((user) => {
            return user.name.toLowerCase().includes(this.state.searchString)
        })

        return (

            <>

                <p> MONSTERs </p>

                <input type='search' placeholder="Search..." className=" search-box form-control" onChange={(e) => {
                    let searchString = e.target.value.toLocaleLowerCase()
                    this.setState(() => {
                        return { searchString }
                    })
                }} />

                {filterdUsers.map(item => {
                    return <p key={item.id} onClick={() => console.log('Will Handle to Change name')}> {item.name} </p>
                })}

            </>

        )
    }
}

export default Monsters;