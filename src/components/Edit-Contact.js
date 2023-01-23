import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const listofcontacts = [
    { field: 'id', headerName: 'ID', width: 90 },
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
        editable: true,
    },
];


class Updatecontact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatecontact: [],
        }
    }

    updateid() {
        const updateId = document.getElementById("updateId-inp").value;
        const updateContact = { updateId: updateId }

        fetch("https://kanganphonebookapi.azurewebsites.net/contact?",
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateContact)
            }
        )
            //.then(response => response.json())
            .then((result) => result.json())
            //.then((res) => console.log(res))
            .then((res) => { console.log(res); this.setState({ updatecontact: res }) })
    }
    //making datagrid rows from the result and columns from id name and contact number
    DisplayDataGrid() {
        return (               
            <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                initialState={{
                    sorting: {
                        sortModel: [{ field: 'id', sort:'asc'}]
                    }
                }}
                rows={this.state.updatecontact}
                columns={listofcontacts}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
            </Box>
        )
    }
    render() {

        //getting a id number to find which I want to edit
        return (
            <div className="Updatecontact">
                <h4>Enter ID</h4>
                <input type="number" updateId="updateId-inp" />
                <button onClick={() => this.updateid()}>Find</button>
                <div>
                    {
                        this.state.updatecontact.length === 0 ?
                            <b>Nothing has been found</b> :
                            this.DisplayDataGrid()
                    }
                </div>
            </div>
        )

    }
}

export { Updatecontact }