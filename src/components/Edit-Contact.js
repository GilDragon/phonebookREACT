import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
    Box,
    Button,
} from '@mui/material';
import Popup from 'reactjs-popup';
import '../Edit-Contact.css';
import '../App.css';


//const [value, setValue] = useState();
//
//const valueChange = (e) => {
//    setValue(e.target.value);
//}

function put(event) {
    //let detail = {id: this.state.id, name: this.state.name, contactnumber: this.state.contactNumber}
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
                        }
                        } >
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

// create Updatecontact component
//contructor makes the foundresult empty array
class Updatecontact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foundresult: [],
            resultValid: null,
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
        if (name === "") {
            this.setState({ resultValid: false });
        }
        else {
            this.setState({ resultValid: true });
        }
        //.then = console.log(name);
        //Add name to searchTerm so we can search whatever user's inputs in database 
    }

    // set lastname as name from foundresult and after space set firstname as name from same place but before space
    //splitnames(foundresult) {
    //    const lastname = foundresult.name.slice(foundresult.name.indexOf(' ') + 1);
    //    //console.log(foundresult.name.slice(foundresult.name.indexOf(' ')+ 1));
    //    const firstname = foundresult.name.slice(0, foundresult.name.indexOf(' '));
    //    //console.log(foundresult.name.slice(0, foundresult.name.indexOf(' ')));
    //    this.setState({ id: this.state.foundresult.id });
    //    this.setState({ name: this.state.foundresult.name });
    //    this.setState({ contactNumber: this.state.foundresult.contactNumber });
    //    let contact = { id: foundresult.id, firstname: firstname, lastname: lastname, contactNumber: foundresult.contactNumber }
    //
    //    return { id: foundresult.id, firstname: firstname, lastname: lastname, contactNumber: foundresult.contactNumber };
    //
    //}

    DisplayDataGrid(foundresult) {

        return (

            <Box
                sx={{ height: 400, width: '80%', display: 'flex' }}>
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
    //returning the result of the contact 
    render() {
        return (
            <div>
                    <h3>Find a person to edit</h3>
                    <input type="text" id="searchTerm-inp" placeholder='Ex(Harry Potter)'
                        required data-validation-required-message="Please enter name" />
                    <button onClick={() => this.findPerson()}>Find</button>

                <div className="Updatecontact">
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


export { Updatecontact }