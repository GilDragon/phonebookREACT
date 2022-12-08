import React from 'react';
import { AllPeople, Person } from './All-people';


class Addperson extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Addperson: { name: "Enter any name", contactNumber: "Enter any number"}
        }
    }

    addperson() {
    
        const n = document.getElementById("add-firstname-inp").value;
        const cn = document.getElementById("add-contactNumber-inp").value;
        //const ln = document.getElementById("add-lastname-inp").value;
        //method: 'POST',
        //header: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({ title: 'react POST request example' })


        fetch("http://localhost:5178/ADD?????????"
        + new URLSearchParams({ name: n, contactNumber: cn}))
        .then(response => response.json())
        .then((result)=> result.json()) //json
        .then((res) => console.log(res))
        .then(data => this.setState({ postID: data.id }));
        //.then((res) => res !== null ? this.setState({ people: res }) : this.setState({ people: null }))
        //.then((res)=> this.setState({people: res}))
    }

    render() {
        return (
            <div className="Addperson">
                <h4>Add person</h4>
                     <input type="text" n="add-name-inp" /> <input type="number" cn="add-contactNumber-inp" />
                <button onClick={() => this.addperson()}>Add</button>
                <div>Enter First name, Last name and Contact number (EX) Gilsoo Park 0421971531</div>
            </div>
        )
    }
}

export { Addperson }