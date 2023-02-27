import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import '../App.css';

// make listofcontacts array which has id, name and contactnumber field
const listofcontacts = [
    { field: 'id', headerName: 'ID', width: 90, headerAlign: 'center', },
    {
        field: 'name',
        headerName: 'Name',
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
        headerAlign: 'center',
    },
];

//make AllPeople component 
//consturctor makes state people and listofcontacts value which are null and empty array 
class AllPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: null,
            listofcontacts: [],
        }
    }
    //performs getallPeople

    componentDidMount() {
        this.GetAllPeople();
    }
    // when Getallpeople is performed, it fetch url address below get data across the network
    GetAllPeople() {
        fetch("https://kanganphonebookapi.azurewebsites.net/contacts")
            .then((result) => result.json())
            //.then((res) => console.log(res)); Is it storing? or transmitting?
            //.then((res) => res !== null ? this.setState({ people: res }) : this.setState({ people: null }))
            .then((res) => this.setState({ people: res }))
        // then set the people from constructor as  

    }
    //make Displaydatagrid function which can make the datagrid. table this.state.people is a row and columns are listofcontacts
    // in rows get the value from GetAllpeople function, in columns get listofcontacts array
    DisplayDataGrid() {
        return (
            <Box sx={{ height: 631, width: '100%' }}>
                <DataGrid
                    rows={this.state.people}
                    columns={listofcontacts}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        )
    }
    // make rederPerson function which returns id name, contactnumber and key
    renderPerson(id, name, contactNumber) {
        return <Person id={id} name={name} contactNumber={contactNumber} key={id} />
    }

    //this Allpeople component render if people is not null then shows DisplayDatagrid
    render() {

        return (
            <div>
                <h2>All Contacts</h2>
                <div className="Allpeople">

                    {/* <button onClick={() => this.GetAllPeople()}>Get All</button>
                {
                    this.state.people !== null ?
                        this.state.people.map((person) => this.renderPerson(person.id, person.name, person.contactNumber))
                        : <div></div>
                } */}

                    {this.state.people != null ? this.DisplayDataGrid() : "No contacts"}



                </div>
            </div>
        )
    }
}
class Person extends React.Component {
    render() {
        return <li> {this.props.id} {this.props.name} {this.props.contactNumber} </li>
    }
}

export { AllPeople, Person }
