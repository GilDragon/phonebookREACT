import React from 'react';
import { Person } from './All-people';




export default function App() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <div className="App">
        <input
          type="texy"
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          {dummyData.filter((val) =>{
            if(searchTerm == ""){
              return val
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }
          }).map(data =>{
            return <p>dummyData.title</p>
          })}
        />
      </div>
    );
  }