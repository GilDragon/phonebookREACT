import React from 'react';
import { Person } from './All-people';



class FindPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundperson: { name: "Enter any name", contactNumber: "NOT FOUND YET"}
        }
    }
    foundperson = { name: "NOT FOUND", contactNumber: "NOT FOUND"};

    findPerson() {
        const name = document.getElementById("name-inp").value;
        fetch("http://localhost:5178/FindByName????"
        + new URLSearchParams({search: name}))
            .then((result)=> result.json()) //json
            .then((res)=> res !== null? this.setState({foundperson: res}) : {id: "Not Found ", first_name: "NOT FOUND", last_name: "NOT FOUND"}) //set 
    }
   
    render() {
 
        return (
            <div1 className="FindPerson">
                <h3>Find a person</h3>
                <input type="text" id="name-inp" />
                <button onClick={() => this.findPerson()}>Find</button>
                
                    <Person id={this.state.foundperson.id} name={this.state.foundperson.name} contactNumber={this.state.foundperson.contactNumber}></Person>
                
            </div1>
        )
    }

}

export { FindPerson }