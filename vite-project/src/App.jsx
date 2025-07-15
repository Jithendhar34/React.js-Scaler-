import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloComponent from './HelloComponent';
import Displaydata from './Displaydata';
import Button from './Button';
import Counter from './counter';
import UserCard from './User/UserCard';
import userObject from './User/User.js';

function App() {
  const [count, setCount] = useState(0);

  const fruits =['apple','melon','Orange'];
  const person ={
    name :'bob',
    age:40,

  }

  return (
    <>
      <div>
    <HelloComponent name="K Jithendhar reddy" age="20"/>
       <HelloComponent name="Alice" age="22"/>
      </div>
      <div>
        <Displaydata fruits={fruits} person={person} />
      </div>
        <Button/> 
        <Counter/>
        <UserCard user={userObject} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App