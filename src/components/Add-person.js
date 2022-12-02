import React from 'react';
import { AllPeople, Person } from './All-people';


class Addperson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Addperson: {id: "Not Found", first_name: "NOT FOUND", last_name: "NOT FOUND"}
        }
    }

    addperson() {
        
        const id = document.getElementById("add-id-inp").value;
        const fn = document.getElementById("add-first_name-inp").value;
        const ln = document.getElementById("add-last_name-inp").value;

        console.log("Id: ", id)

        fetch("http://localhost:5178/contact"
        + new URLSearchParams({id: id, first_name: fn, last_name: ln}))
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
                <input type="number" id="add-id-inp" /> <input type="text" fn="add-first_name-inp" /> <input type="text" ln="add-last_name-inp" />
                <button onClick={() => this.addperson()}>Add</button>
            </div>
        )
    }
}

export { Addperson }