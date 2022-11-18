import React from 'react';
import { AllPeople, Person } from './All-people';


class FindPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundperson: {name: "Not Found", phonenumber: 0}
        }
    }
    foundperson = { name: "Not Found", phonenumber: 0};

    findPerson() {
        const name = document.getElementById("name-inp").value;
        fetch("http://localhost:5178/FindByName?"
        + new URLSearchParams({search: name}))
            .then((result)=> result.json()) //json
            .then((res)=> res !== null? this.setState({foundperson: res}) : {name: "Not Found ", phonenumber: 0}) //set 
    }


    render() {
 
        return (
            <div className="FindPerson">
                <h3>Find a person</h3>
                <input type="text" id="name-inp" />
                <button onClick={() => this.findPerson()}>Find</button>
                
                    <Person name={this.state.foundperson.name} number={this.state.foundperson.phonenumber}/>
                
            </div>
        )
    }

}

export { FindPerson }