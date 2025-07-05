import './App.css';
import { ContnerData } from './component/Contner.jsx';
import CardData from './component/CardData.jsx';
import { useState } from 'react';

const usersData = [
  {
    "name": "Aarav Sharma",
    "age": 24
  },
  {
    "name": "Diya Mehta",
    "age": 21
  },
  {
    "name": "Karan Patel",
    "age": 27
  },
  {
    "name": "Sneha Roy",
    "age": 23
  },
  {
    "name": "Rahul Verma",
    "age": 25
  }
]



const App = () => {
  const [users, setUsers] = useState("");
  console.log(users);
  
  return (
    <>
      {/* <ul>
        {
          users.map((curEle, index) => {
            return (
              <li key={index}>
                <h1>{curEle.name} - {curEle.age} year old</h1>
              </li>)
          })
        }
      </ul> */}
<form action="submit">
  <input type='text' value={users} onChange={(e)=>setUsers(e.target.value)}></input>
  <button>submit</button>
</form>


      {/* <ContnerData> */}
      {/* <Home /> */}
      {/* <CardData /> */}
      {/* </ContnerData> */}
    </>
  );
};

export default App;