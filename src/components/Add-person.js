import React from 'react';
import { AllPeople, Person } from './All-people';


class Addperson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Addperson: { name: "NOT FOUND", contactNumber: "NOT FOUND"}
        }
    }

    addperson() {
    
        const n = document.getElementById("add-name-inp").value;
        const cn = document.getElementById("add-contactNumber-inp").value;


        fetch("http://localhost:5178/contact"
        + new URLSearchParams({ name: n, contactNumber: cn}))
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
                     <input type="text" n="add-name-inp" /> <input type="text" cn="add-contactNumber-inp" />
                <button onClick={() => this.addperson()}>Add</button>
            </div>
        )
    }
}

export { Addperson }