import './App.css';
import Shipment from '../dataCompanies/shipment.json';
import Header from '../header/header';
import Footer from '../footer/footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from '../../pages/layout';
import Home from '../../pages/home';
import Apple from '../../pages/apple';
import Walmart from '../../pages/walmart';
import ExxonMobil from '../../pages/exxonMobil';


function App() {
  return (
    <div className="App">
      <Header/>
      <main className="containerr">
        <section className="scrollBar2 companies react_wrapper">
          
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="walmart" element={<Walmart />} />
                <Route path="exxonMobil" element={<ExxonMobil />} />
                <Route path="apple" element={<Apple />} />
              </Route>
            </Routes>
          </BrowserRouter>
        
      </section>
    </main>

     {/*  {
      Shipment && Shipment.map(shipment => {
          return (
            
            <div className="box" key={shipment.id}>
              <main className="containerr">
              
              <section className="scrollBar1 companies">
                  <div>
                      <p><a href={shipment.name}>{shipment.name}</a></p>
                  </div>
              </section>
            
                <section className="scrollBar2 company_details">
                  <div className="company_title">
                    <h1>{shipment.name}</h1>
                  </div> 
                  <div className="company_email">
                    <p><a href="mailto:{shipment.email}">{shipment.email}</a></p>
                  </div> <br />
                  <div className="bays">
                    <p>
                      Number of required cargo bays <strong>2</strong>
                    </p>
                  </div>
                  <div className="cargo_boxes">
                  <p>Cargo boxes</p>
                  <input type="text" value={shipment.boxes}></input>
                  </div>
                </section>
              </main>
            </div>
          )
        })
      } */}
      <Footer/>
    </div>
  );
}

export default App;
