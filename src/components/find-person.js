import React from 'react';
import { Person } from './All-people';




class FindPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundresult: []
        }
    }
        
    renderPerson(id, name, contactNumber) {
        console.log('renderperson', name, contactNumber)
        return <Person id={id} name={name} contactNumber={contactNumber} key={id}/>
    }


    findPerson() {
        const name = document.getElementById("searchTerm-inp").value;
        fetch("https://kanganphonebookapi.azurewebsites.net/contact?"
        + new URLSearchParams({searchTerm: name}))
            .then((result)=> result.json()) //json
            //.then((res)=> res !== null? this.setState({foundperson: res}) : {id: "Not Found ", name: "NOT FOUND", contactNumber: "NOT FOUND"}) //set
            //.then((res) => console.log(res));
            .then((res) => this.setState({ foundresult: res }))
            
    }
   
    render() {
 
        return (
            <div className="FindPerson">
                <h3>Find a person</h3>
                <input type="text" id="searchTerm-inp" />
                <button onClick={() => this.findPerson()}>Find</button> 

                {
                    this.state.foundresult.length == 0 ?
                        console.log("No people found", this.state.foundresult) :
                        this.state.foundresult.map((foundperson) => this.renderPerson(foundperson.id, foundperson.name, foundperson.contactNumber))                           
                }
                
            </div>
        )
    }

}

export { FindPerson }