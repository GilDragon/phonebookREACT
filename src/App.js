import { Outlet, NavLink, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { AllPeople } from './components/All-people';
import { FindPerson } from './components/find-person';
import { Addperson } from './components/Add-person';





function App() {
  return (
  
      <Routes>
        <Route  element={<Layout />}>
          <Route index element={<AllPeople />} />
          <Route path="all" element={<AllPeople />} />
          <Route path="findperson" element={<FindPerson />} />
          <Route path="addperson" element={<Addperson />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
  
  );
}

function Layout() {
  return (
    <div className="App">
    <h1>PhoneBook</h1>
      <nav>
          <NavLink to="/all" element={<AllPeople />}>
            List all Contacts
          </NavLink>
      </nav>
      <nav>
          <NavLink to="/FindPerson" element={<FindPerson />}>
            Find Contact
          </NavLink>
      </nav>
      <nav>
        <NavLink to="/addperson" element={<Addperson />}>
          Add Contact
        </NavLink>
      </nav>
   <main>
    <Outlet />
  </main>
    </div>
  )
}
export default App;