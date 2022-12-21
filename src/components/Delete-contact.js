import React from 'react';


class Deletecontact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Deletecontact: ''
        }
    }
    
    deleteid() {
        const id = document.getElementById("searchTerm-inp").value;

        fetch("https://kanganphonebookapi.azurewebsites.net/contact?"
        + new URLSearchParams({id: id}), {method: 'DELETE'}
        )
        //.then(response => response.json())
        .then((result)=> result.json())
        //.then((res) => console.log(res))
        .then((res) => this.setState({ Deletecontact: res }))
    }

    render() {
        

        return (
            <div className="Deletecontact">
                <h4>Delete a contact</h4>
                    <input type="number" id="searchTerm-inp" />
                <button onClick={() => this.deleteid()}>Delete</button>
                <div 
                style={{color: 'red', padding: "10px", fontFamily: "sans-serif", fontSize: 24}}>
                    Enter the id that you
                <b> loathe</b>
                {
                    this.state.Deletecontact === 0 ?
                        console.log("No contact found") :
                        console.log("the contact has been deleted")
                }
                </div>
            </div>
        )
    
    }
}

export { Deletecontact }