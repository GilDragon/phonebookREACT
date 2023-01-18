import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
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



class AllPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: null,
            listofcontacts: [],
        }
    }


    componentDidMount() {
        this.GetAllPeople();
    }

    GetAllPeople() {
        fetch("https://kanganphonebookapi.azurewebsites.net/contacts")
            .then((result) => result.json())
            //.then((res) => console.log(res));
            //.then((res) => res !== null ? this.setState({ people: res }) : this.setState({ people: null }))
            .then((res) => this.setState({ people: res }))

    }
//make Displaydatagrid function which can make the datagrid. table this.state.people is a row and columns are listofcontacts
    DisplayDataGrid() {
        return (               
            <Box sx={{ height: 631, width: '100%' }}>
            <DataGrid
                rows={this.state.people}
                columns={listofcontacts}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
            </Box>
        )
    }

    renderPerson(id, name, contactNumber) {
        return <Person id={id} name={name} contactNumber={contactNumber} key={id} />
    }
    render() {

        return (
            <div className="Allpeople">
                <h2>All Contacts</h2>
                {/* <button onClick={() => this.GetAllPeople()}>Get All</button>
                {
                    this.state.people !== null ?
                        this.state.people.map((person) => this.renderPerson(person.id, person.name, person.contactNumber))
                        : <div></div>
                } */}

                { this.state.people != null ? this.DisplayDataGrid() : "No contacts" }



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
