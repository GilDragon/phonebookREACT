import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../App.css';
import {
    Box,
    Button,
} from '@mui/material';
import Popup from 'reactjs-popup';


function put(event) {
    //let detail = {id: this.state.id, name: this.state.name, contactnumber: this.state.contactNumber}
    console.log(event)
    fetch('https://kanganphonebookapi.azurewebsites.net/contact', {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
        .then((result) => console.log(result))
    //.then((res) => this.setState({ editcontact: res }))
    alert("Your contact has been updated")

}

const listofcontacts = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90
    },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 150,
        editable: true,
        headerAlign: 'center',
    },    
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 150,
        editable: true,
        headerAlign: 'center',
    },
    {
        field: 'contactNumber',
        headerName: 'Contact Number',
        type: 'number',
        width: 150,
        editable: true,
    },
    {
        field: "edit",
        headerName: "Edit",
        sortable: false,
        renderCell: ({ row }) =>
            <Popup trigger=<Button
                onClick={() => this.foundresult(row)}
                style={{ backgroundColor: 'lawngreen' }}>
                Edit
            </Button>>

                <form class="PopupForm" id="Editform"
                    onChange={function (e) {
                        e.preventDefault();
                    }}>

                    <p>

                        <div className='Updatecontact'>
                            id:
                            <input type="number" name="ID" value={row.id} />
                        </div>

                    </p>
                    <p>
                        Name:
                        <input id="name" type="text" name="Name" defaultValue={(row.name)} />
                    </p>
                    <p>
                        <div>
                            Contact Number:
                            <input id="contactNumber" type="number" name="Contactnumber" defaultValue={row.contactNumber} />
                        </div>
                    </p>

                    <button
                        class="SubButton"
                        type="submit"
                        onClick={(event) =>
                            put({
                                id: row.id,
                                name: document.getElementById("name").value,
                                contactNumber: document.getElementById("contactNumber").value
                            })}
                    > Submit </button>
                </form>
            </Popup>,
    },
];
//make FIndPerson component, inside of it set foundresult as new array
class FindPerson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foundresult: [],
            resultValid: null,
        }
    }

    // when findPerson function is operated, get a Id from "searchTerm-inp" 
    //fetch to below url then send a searchTerm which I set as name then get a result then foundresult will be set again
    findPerson() {

        const name = (document.getElementById("searchTerm-inp").value).replace(/\s{2,}/g, " ").trim();
        fetch("https://kanganphonebookapi.azurewebsites.net/contact?"
            + new URLSearchParams({ searchTerm: name }))
            .then((result) => result.json())
            //.then((res)=> res !== null? this.setState({foundperson: res}) : {id: "Not Found ", name: "NOT FOUND", contactNumber: "NOT FOUND"}) //set
            //.then((res) => console.log(res));
            .then((res) => this.setState({ foundresult: res }))
        //Add name to searchTerm so we can search whatever user's inputs in database 
        if (name === "") {
            this.setState({ resultValid: false });
        }
        else {
            this.setState({ resultValid: true });
        }
    }

    DisplayDataGrid() {
        return (
            <Box sx={{ height: 400, width: '80%', display: 'flex' }}>
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
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        )
    }
    // when foundresult's length is not 0 then it shows displaydataGrid
    render() {

        return (
            <div>
                    <h3>Find a person</h3>
                    <input type="text" id="searchTerm-inp" required placeholder='' />
                    <button onClick={() => this.findPerson()}>Find</button>
                <div className="FindPerson">
                    <div>
                        {
                            this.state.resultValid === false ?
                                <b>Enter Valid name</b> :
                                this.state.resultValid === true ?
                                    this.DisplayDataGrid() :
                                    <b>Enter the name</b>
                        }
                    </div>
                </div>
            </div>


        )
    }

}

export { FindPerson }