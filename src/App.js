import { Outlet, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { AllPeople } from './components/All-people';
import { FindPerson } from './components/find-person';
import { Addperson } from './components/Add-person';
import { Deletecontact } from './components/Delete-contact';
import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';



function App() {
  return (
  
      <Routes>
        <Route  element={<Layout />}>
          <Route index element={<AllPeople />} />
          <Route path="all" element={<AllPeople />} />
          <Route path="findperson" element={<FindPerson />} />
          <Route path="addperson" element={<Addperson />} />
          <Route path="deletecontact" element={<Deletecontact />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
  
  );
}


function Layout() {

  return (

    <div className="App">
            <header style={{ padding: 16, fontSize: 25 }}>

        <nav style={{ width: '100%', margin: '30px 0 0 30px', fontSize: 24}}>
        <AppBar position= "static">
        <Container maxWidth= "lg">
        <h1>
        PhoneBook
        </h1>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'khaki',
              textDecoration: 'none',
            }}
          >
            Kangan
          </Typography>
        <Button variant="contained"><NavLink to="/all" element={<AllPeople />} style={{color: 'white'}} >
            List all Contacts
          </NavLink></Button>

          <Button variant="contained"><NavLink to="/FindPerson" element={<FindPerson />} style={{color: 'white'}} >
            Find Contact
          </NavLink></Button>
          
          <Button variant="contained"><NavLink to="/addperson" element={<Addperson />} style={{color: 'white'}} >
          Add Contact
        </NavLink></Button>
        <Button variant="contained"><NavLink to="/deletecontact" element={<Deletecontact />} style={{color: 'white'}} >
          Delete contact
        </NavLink></Button>

      </Container>
        </AppBar>
      </nav>

      </header>

   <main>
    <Outlet />
  </main>
    </div>
  )
}
export default App;