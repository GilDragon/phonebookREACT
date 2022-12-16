import React, { Component } from 'react';
import { Person } from './All-people';

class Deletecontact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Deletecontact: { id: "enter the id that you want to delete"}
        }
    }
    
    deleteid() {
        const did = document.getElementById("delete-id-inp").value;


        fetch("https://kanganphonebookapi.azurewebsites.net/delete?"
        + new URLSearchParams({ id: did}))
        //.then(response => response.json())
        .then((result)=> result.json())
        .then((res) => console.log(res))
        //.then((res) => this.setState({ Deletecontact: res }))
    }

    render() {
        

        return (
            <div className="Deletecontact">
                <h4>Delete a contact</h4>
                    <input type="number" did="delete-id-inp" />
                <button onClick={() => this.deleteid()}>Delete</button>
                <div 
                style={{color: 'red', padding: "10px", fontFamily: "sans-serif", fontSize: 24}}>
                    Enter the id that you
                <b> loathe</b>
                </div>
            </div>
        )
    
    }
}

export { Deletecontact }