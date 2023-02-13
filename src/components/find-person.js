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
//make FIndPerson component, inside of it set foundresult as new array
class FindPerson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foundresult: [],
        }
    }
    // 요기는 foundresult 라는 array를 만듦 이름이 중복 될수 있으니까 make foudresult Array for multiple results


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

    }


    DisplayDataGrid() {
        return (               
            <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                initialState={{
                    sorting: {
                        sortModel: [{ field: 'id', sort:'asc'}]
                    }
                }}
                rows={this.state.foundresult}
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
    // when foundresult's length is not 0 then it shows displaydataGrid
    render() {

        return (
            <div className="FindPerson">
                <h3>Find a person</h3>
                <input type="text" id="searchTerm-inp" />
                <button onClick={() => this.findPerson()}>Find</button>
                <div>
                    {
                        this.state.foundresult.length === 0 ?
                            <b>Nothing has been found</b> :
                            this.DisplayDataGrid()
                    }
                </div>
                <div>
                </div>
            </div>

        )
    }

}

export { FindPerson }