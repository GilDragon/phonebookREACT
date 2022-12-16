import React from 'react';
import { AllPeople, Person } from './All-people';


class Addperson extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            addcontact: { addName: "Enter any name", addNumber: "Enter any number"}
        }
    }

    addperson() {
    
        const n = document.getElementById("add-addName-inp").value;
        const an = document.getElementById("add-addNumber-inp").value;
        //const ln = document.getElementById("add-lastname-inp").value;
        //method: 'POST',
        //header: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({ title: 'react POST request example' })

        const newContact = { name: n, contactNumber: an}

        fetch("https://kanganphonebookapi.azurewebsites.net/contact",
            {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify(newContact)
            })
            .then(res => console.log(res))
                
        //+ new URLSearchParams({ addName: n, addNumber: an }))
        //.then(response => response.json())
        // .then((result)=> result.json()) //jsonn
        // .then((res) => console.log(res))
        //.then((res)=> this.setState({addcontact: res}))
        //.then((res) => res !== null ? this.setState({ people: res }) : this.setState({ people: null }))

    }

    render() {
        return (
            <div className="Addperson">
                <h4>Add person</h4>
                     <input type="text" id="add-addName-inp" /> <input type="text" id="add-addNumber-inp" />
                <button onClick={() => this.addperson()}>Add</button>
                <div style={{padding: "10px", color: 'purple', fontWeight: 'bold'}}>Enter First name, Last name and Contact number (EX) Gilsoo Park 0421971531</div>
            </div>
        )
    }
}

export { Addperson }