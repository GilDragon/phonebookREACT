import React from 'react';
import '../App.css';

class Addperson extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Addperson: null
        }
    }
// set IDs for addname and addnumber as n and an
    addperson() {
        
        const n = document.getElementById("add-addName-inp").value;
        const an = document.getElementById("add-addNumber-inp").value;
        //const ln = document.getElementById("add-lastname-inp").value;
        //method: 'POST',
        //header: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({ title: 'react POST request example' })
        //just in case if any of those are left empty make your ask user to fill it up
        if(n === "" || an === "") 
        {
            alert("Name or contact number have to be added")

            return (
                <div><b>Name or contact number have to be filled</b></div>
            );}
//make new Contact which has name and contacnumber as n and an above
//fetch with the url address and using POST method push n and an to API to add new contact 
        const newContact = { name: n, contactNumber: an}

        fetch("https://kanganphonebookapi.azurewebsites.net/contact?",
            {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify(newContact)
            })
            .then(r => r.json())
            .then(res => this.setState({Addperson: res}))
            //.then(console.log(this.state.Addperson))
            //.then(re => this.setState({n: re}))
            //.then(console.log(this.state.n))

                
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
                <body>
                <h4>Add person</h4>
                    <b>Name:</b>
                    <input type="text" id="add-addName-inp" placeholder='ex) Harry Potter' autoComplete="Firstname Lastname"/>
                    <b>Phone number:</b>
                    <input type="number" id="add-addNumber-inp" placeholder='0412345768'/>
                     
                <button onClick={() => this.addperson()}>Add</button>
                <div style={{padding: "10px", color: 'purple', fontWeight: 'bold'}}></div>
                    <div>
                    {
                        this.state.Addperson === null ?
                        <></> :
                        <b style={{color: 'blueviolet'}}>A contact has been added</b>

                    }

                </div>
                </body>
            </div>

            
            // if the id-name and id-number goes into database successfully return new contact has been added
        )
    }
}

export { Addperson }