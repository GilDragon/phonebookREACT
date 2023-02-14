import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
    Box,
    Button,
} from '@mui/material';
import Popup from 'reactjs-popup';



// make listofcontacts array which has one more column for Edit button which create popup that shows id, name and contact number
const listofcontacts =

    [

        {
            field: 'id',
            headerName: 'ID',
            width: 90,
            editable: false,
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'contactNumber',
            headerName: 'Contact Number',
            type: 'number',
            width: 150,
            editable: false,

        },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Popup trigger=<Button onClick={() => this.foundresult(row)}>
                    Edit
                </Button>>

                    <form onSubmit={function(e) {
                        e.preventDefault();
                    }} method="PUT">

                        <p>

                            <div className='Updatecontact'>
                                id:
                                <input type="number" name="ID" placeholder='ID' value={row.id} />
                            </div>

                        </p>
                        <p>
                            Name:
                            <input type="text" name="Name" placeholder='ex)Anh Khan' defaultValue={(row.name)} />
                        </p>
                        <p>
                            <div>
                                Contact Number:
                                <input type="number" name="Contactnumber" placeholder='Contact number' defaultValue={row.contactNumber} />
                            </div>
                        </p>

                        <input type="submit" value="Submit" method="PUT"/>
                    </form>
                </Popup>,
        },

    ];

// create Updatecontact component
//contructor makes the foundresult empty array
class Updatecontact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foundresult: [],
        }

    }

    

// same function in find-person get the search param and find the contact
    findPerson() {


        const name = (document.getElementById("searchTerm-inp").value).replace(/\s{2,}/g, " ").trim();
        fetch("https://kanganphonebookapi.azurewebsites.net/contact?"
            + new URLSearchParams({ searchTerm: name }))
            .then((result) => result.json())
            //.then((res)=> res !== null? this.setState({foundperson: res}) : {id: "Not Found ", name: "NOT FOUND", contactNumber: "NOT FOUND"}) //set
            //.then((ren) => console.log(ren));
            //.then(r => r.map((contact) => this.splitnames(contact)))
            .then((res) => this.setState({ foundresult: res }))
        //.then = console.log(name);
        //Add name to searchTerm so we can search whatever user's inputs in database 
    }
    // set lastname as name from foundresult and after space set firstname as name from same place but before space
    splitnames(foundresult) {
        const lastname = foundresult.name.slice(foundresult.name.indexOf(' ') + 1);
        //console.log(foundresult.name.slice(foundresult.name.indexOf(' ')+ 1));
        const firstname = foundresult.name.slice(0, foundresult.name.indexOf(' '));
        //console.log(foundresult.name.slice(0, foundresult.name.indexOf(' ')));
        this.setState({ id: this.state.foundresult.id });
        this.setState({ name: this.state.foundresult.name });
        this.setState({ contactNumber: this.state.foundresult.contactNumber });
        let contact = { id: foundresult.id, firstname: firstname, lastname: lastname, contactNumber: foundresult.contactNumber }

        return { id: foundresult.id, firstname: firstname, lastname: lastname, contactNumber: foundresult.contactNumber };

    }
    DisplayDataGrid(foundresult) {

        return (

            <Box sx={{ height: 400, width: '100%', display: 'flex' }}>

                <DataGrid
                    initialState={{
                        sorting: {
                            sortModel: [{ field: 'id', sort: 'asc' }]
                        }
                    }}
                    rows={this.state.foundresult}
                    columns={listofcontacts}
                    pageSize={5}
                    rowsPerPageOptions={[5]}

                    editingMode="modal"
                    enableEditing
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}

                />



            </Box>

        )
    }
    //updateContact() {
    //    let item = {id,name,contactnumber}
    //    fetch("https://kanganphonebookapi.azurewebsites.net/contact?", {
    //        method: 'PUT',
    //        headers: {
    //            'Accept': 'application/json',
    //            'Content-Type': 'application/json'
    //        },
    //        body: JSON.stringify(item)
    //        })
    //        .then((result) => result.json())
    //        //.then((res)=> res !== null? this.setState({foundperson: res}) : {id: "Not Found ", name: "NOT FOUND", contactNumber: "NOT FOUND"}) //set
    //        //.then((ren) => console.log(ren));
    //        //.then(r => r.map((contact) => this.splitnames(contact)))
    //        .then((res) => this.setState({ foundresult: res }))
    //}
    //returning the result of the contact 
    render() {
        return (
            <div className="Updatecontact">
                <h3>Find a person to edit</h3>
                <input type="text" id="searchTerm-inp" placeholder='Ex(Harry Potter)' />
                <button onClick={() => this.findPerson()}>Find</button>
                <div>
                    {
                        this.state.foundresult.length === 0 ?
                            <b>Nothing has been found</b> :
                            this.DisplayDataGrid()
                    }
                </div>
            </div>

        )
    }

}


export { Updatecontact }