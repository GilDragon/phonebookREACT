import React from 'react';
import { Person } from './All-people';




class FindPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundperson: { name: null, contactNumber: null}
        }
    }
        
    renderPerson(id, name, contactNumber) {
        return <Person id={id} name={name} contactNumber={contactNumber} key={id}/>
    }


    findPerson() {
        const name = document.getElementById("searchTerm-inp").value;
        fetch("http://localhost:5178/contact?"
        + new URLSearchParams({searchTerm: name}))
            .then((result)=> result.json()) //json
            //.then((res)=> res !== null? this.setState({foundperson: res}) : {id: "Not Found ", name: "NOT FOUND", contactNumber: "NOT FOUND"}) //set
            //.then((res) => console.log(res)); 
            .then((res)=> this.setState({foundperson: res}))
    }
   
    render() {
 
        return (
            <div className="FindPerson">
                <h3>Find a person</h3>
                <input type="text" id="searchTerm-inp" />
                <button onClick={() => this.findPerson()}>Find</button> 

                <Person name={this.state.foundperson.name} contactNumber={this.state.foundperson.contactNumber}></Person>
                <li> {this.state.foundperson.name} {this.state.contactNumber}</li>

            </div>
        )
    }

}

export { FindPerson }