import './App.css';
import { AllPeople } from './components/All-people';
import {FindPerson} from './components/find-person';
import {Addperson} from './components/Add-person';
function App() {
  return (
    <div className="App">
      <h1>Phone Book</h1>
      < AllPeople />
      < FindPerson />
      < Addperson />
    </div>
  );
}

export default App;
