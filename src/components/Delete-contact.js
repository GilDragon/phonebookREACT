import React from 'react';
import '../App.css';

class Deletecontact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Deletecontact: null,
            IdValid: null,
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
        if (id === "") {
            this.setState({IdValid: false});
        } else if (id != ""){
            this.setState({IdValid: true})
        }
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
                    
                {
                   this.state.IdValid === false ?
                            <>Enter the valid ID</> :
                            this.state.IdValid === true ?
                                <div> Contact deleted </div> :
                                <div> Enter the ID </div>
                }
                </div>
                </body>
            </div>
        )
    
    }
}

export { Deletecontact }