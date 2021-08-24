import React,{ useState } from 'react';
import './App.css';

import Navbar from './Navbar';
import Login from './Login';
import Footer from './Footer';


function App(){
  const [nameState, setNameState] = useState('Hello!')
  

  return (
      <div>
        {/* <h1>{nameState}</h1> */}
        <Navbar Username={nameState}/>
        <Login show={true} onChange={value => setNameState(value)} />
        <Footer/>
      </div>
    );
}
export default App;
