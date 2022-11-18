import React from 'react';
import { AllPeople, Person } from './All-people';

class Addperson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Addperson: {name: "Not Found", phone: 0}
        }
    }

    addperson() {
        
        const n = document.getElementById("add-name-inp").value;
        const pn = document.getElementById("phoneNumber-inp").value;

        console.log("name: ", n)

        fetch("http://localhost:5178/Add?"
        + new URLSearchParams({name: n, phone: pn}))
        //.then((result)=> result.json()) //json
        //.then((res)=> res !== null? this.setState({Addperson: res}) : {name: "Not Found ", phone: 0})
            //.then((res) => console.log(res));
            //.then((res) => res !== null ? this.setState({ people: res }) : this.setState({ people: null }))
            //.then((res)=> this.setState({people: res}))
    }

    render() {
        return (
            <div className="Addperson">
                <h4>Add person</h4>
                <input type="text" id="add-name-inp" /> <input type="number" id="phoneNumber-inp" />
                <button onClick={() => this.addperson()}>Add</button>
            </div>
        )
    }
}

export { Addperson }