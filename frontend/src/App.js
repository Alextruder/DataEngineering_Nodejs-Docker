import React, { Component, useEffect, useState } from "react";
import "./App.css";
import logo from './logo.svg';

function App () {

  const [counter,setCounter] = useState([]);

   function fetchAPI(){
    fetch('http://localhost:8083/')
    .then(response=> response.json())
    .then(response=>{
      setCounter(response.pageCount)
      console.log(response)
    })
    .catch(err => console.error(err));
  }

  useEffect(()=>{
    
     fetchAPI()
  },[]);
    
    return (
      <div>
        <div className="App">
        </div>
          <p>HERE :</p>
          <p>{counter}</p>
        <div >
          
        </div>
      </div>
    );
  }


export default App;