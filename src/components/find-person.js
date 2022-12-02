import React from 'react';
import { Person } from './All-people';



class FindPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundperson: {id: "Not Found", first_name: "NOT FOUND", last_name: "NOT FOUND"}
        }
    }
    foundperson = { id: "Not Found", first_name: "NOT FOUND", last_name: "NOT FOUND"};

    findPerson() {
        const first_name = document.getElementById("first_name-inp").value;
        fetch("http://localhost:5178/FindByName?"
        + new URLSearchParams({search: first_name}))
            .then((result)=> result.json()) //json
            .then((res)=> res !== null? this.setState({foundperson: res}) : {id: "Not Found ", first_name: "NOT FOUND", last_name: "NOT FOUND"}) //set 
    }


    render() {
 
        return (
            <div className="FindPerson">
                <h3>Find a person</h3>
                <input type="text" id="first_name-inp" />
                <button onClick={() => this.findPerson()}>Find</button>
                
                    <Person id={this.state.foundperson.id} first_name={this.state.foundperson.first_name} last_name={this.state.foundperson.last_name}></Person>
                
            </div>
        )
    }

}

export { FindPerson }