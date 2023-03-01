import { Outlet, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { AllPeople } from './components/All-people';
import { FindPerson } from './components/find-person';
import { Addperson } from './components/Add-person';
import { Deletecontact } from './components/Delete-contact';
import { Updatecontact } from './components/Edit-Contact';
import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import all the things above from those directories so that I can use it in App.js

//when App is performed return inside ()
function App() {
  return (
  // if I access with / Layout function is shown on first page and Shows AllPeople
  // access with /all then performs AllPeople componentfrom above
  // access with /findperson then perform FindPerson component from above
  // access with /addperson then performs Addperson from above
  // access with /anywords besides above words it shows in <p></p>
      <Routes>
        <Route  element={<Layout />}> 
          <Route index element={<AllPeople />} />
          <Route path="all" element={<AllPeople />} />
          <Route path="findperson" element={<FindPerson />} />
          <Route path="addperson" element={<Addperson />} />
          <Route path="deletecontact" element={<Deletecontact />} />
          <Route path="updatecontact" element={<Updatecontact />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
  
  );
}

//when Layout is performed returns phonebook which is in Appbar and Container and nav
function Layout() {

  return (

    <div className="App" >
            <header style={{ padding: 20, fontSize: 25 }} >
        <nav style={{  width: '100%', margin: '10px 0px 0px 10px', fontSize: 24}}>
        <AppBar position= "sticky" style={{
          backgroundColor: '#13324a52',
         color: '#5470a0',
         opacity: 0.8,
         boxShadow: "revert-layer"
          }}>
        <Container maxWidth= "lg">
        <h1>
        PhoneBook
        </h1>
        <kanganlogo> </kanganlogo>
        <Typography
            variant= "h6"
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

          </Typography>
        <Button className='Bigbtn'><NavLink to="/all" element={<AllPeople />} style={{color: 'white'}} >
            List all Contacts
          </NavLink></Button>

          <Button className='Bigbtn'><NavLink to="/findperson" element={<FindPerson />} style={{color: 'white'}} >
            Find Contact
          </NavLink></Button>
          
          <Button className='Bigbtn'><NavLink to="/addperson" element={<Addperson />} style={{color: 'white'}} >
          Add Contact
        </NavLink></Button>
        <Button className='Bigbtn'><NavLink to="/deletecontact" element={<Deletecontact />} style={{color: 'white'}} >
          Delete contact
        </NavLink></Button>
        <Button className='Bigbtn'><NavLink to="/updatecontact" element={<Updatecontact />} style={{color: 'white'}} >
          Update contact
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