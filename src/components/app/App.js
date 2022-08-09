import './App.css';
import {React, useState } from "react";
import TextField from '../../../node_modules/@mui/material/TextField';
import List from "../../list";

import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Footer from '../footer/footer';
import data from '../../shipment.json';

function App() {
  const { shipment } = data;
  return (
    <div className="App">
      <Header />

      <div className="main">
          <div className="search">
            <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
            />
          </div>
          <List />
      </div>
      
      <Main shipment={shipment} />
      
      <Footer/>
    </div>
  );
}

export default App;
