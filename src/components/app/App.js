import './App.css';
import {React, useState } from "react";
import TextField from '../../../node_modules/@mui/material/TextField';

import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Footer from '../footer/footer';

function App() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div> 
      <Main  input={inputText}/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
