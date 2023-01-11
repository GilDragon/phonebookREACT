import React from 'react';


class Deletecontact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Deletecontact: null
        }
    }
    
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
        

        return (
            <div className="Deletecontact">
                <h4>Delete a contact</h4>
                    <input type="number" id="id-inp" />
                <button onClick={() => this.deleteid()}>Delete</button>
                <div id="result"
                style={{color: 'red', padding: "10px", fontFamily: "sans-serif", fontSize: 24}}>
                    Enter the id
                <b> In number</b>
                {
                   this.state.Deletecontact === null ?
                            <></> :
                            this.state.Deletecontact.id === null ?
                                // console.log("contact not found") :
                                <div> Contact not found </div> :
                                <div> Contact deleted </div>
                }
                </div>
            </div>
        )
    
    }
}

export { Deletecontact }