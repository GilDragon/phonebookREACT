import { Outlet, NavLink, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { AllPeople } from './components/All-people';
import { FindPerson } from './components/find-person';
import { Addperson } from './components/Add-person';
import { Deletecontact } from './components/Delete-contact';
import image from './components/image/kangan_logo2.png';


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

    <div className="App" style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: 180}}>
            <header style={{ padding: 16, fontSize: 25 }}>
              <h1>
        PhoneBook
        </h1>
        <nav style={{ width: '100%', margin: '30px 0 0 30px', fontSize: 24}}>

          <NavLink to="/all" element={<AllPeople />} style={{ width: '100%', margin: '30px 0 0 30px', color: 'darkcyan'}} >
            List all Contacts
          </NavLink>

          <NavLink to="/FindPerson" element={<FindPerson />} style={{ width: '100%', margin: '30px 0 0 30px', color: 'blueviolet'}}>
            Find Contact
          </NavLink>
          
          <NavLink to="/addperson" element={<Addperson />} style={{ width: '100%', margin: '30px 0 0 30px', color: 'blue'}}>
          Add Contact
        </NavLink>
        <NavLink to="/deletecontact" element={<Deletecontact />} style={{ width: '100%', margin: '30px 0 0 30px', color: 'yellowgreen'}}>
          Delete contact
        </NavLink>
      </nav>

      </header>
      

   <main>
    <Outlet />
  </main>
    </div>
  )
}
export default App;