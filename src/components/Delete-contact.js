import React from 'react';
import '../App.css';

class Deletecontact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Deletecontact: null
        }
    }
    //in deleteid function set Id for searching parameter called id
    deleteid() {
        const id = document.getElementById("id-inp").value;

        fetch("https://kanganphonebookapi.azurewebsites.net/contact?"
        + new URLSearchParams({id: id}), {method: 'DELETE'}
        )
        //.then(response => response.json())
        .then((result)=> result.json())
        //.then((res) => console.log(res))
            .then((res) => { console.log(res);  this.setState({ Deletecontact: res }) })
    }

    render() {
        
// when button is clicked 
        return (
            <div className="Deletecontact">
                <body>
                <h4>Delete a contact</h4>
                    <input type="number" id="id-inp" />
                <button onClick={() => this.deleteid()}>Delete</button>
                <div id="result"
                style={{color: 'brown', padding: "10px", fontFamily: "sans-serif", fontSize: 24}}>
                    
                <b>Enter the ID</b>
                {
                   this.state.Deletecontact === null ?
                            <></> :
                            this.state.Deletecontact.id === null ?
                                // console.log("contact not found") :
                                <div> Contact not found </div> :
                                <div> Contact deleted </div>
                }
                </div>
                </body>
            </div>
        )
    
    }
}

export { Deletecontact }