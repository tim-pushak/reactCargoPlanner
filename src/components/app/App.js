import './App.css';
import Shipment from '../dataCompanies/shipment.json';
import Header from '../header/header';
import Footer from '../footer/footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/>
      {
      Shipment && Shipment.map(shipment => {
          return (
            
            <div className="box" key={shipment.id}>
              <main className="containerr">
              
              <section class="scrollBar1 companies">
                  <div>
                      <p><a href={shipment.name}>{shipment.name}</a></p>
                  </div>
              </section>
            
                <section className="scrollBar2 company_details">
                  <div className="company_title">
                    <h1>{shipment.name}</h1>
                  </div> 
                  <div class="company_email">
                    <p><a href="mailto:{shipment.email}">{shipment.email}</a></p>
                  </div> <br />
                  <div class="bays">
                    <p>
                      Number of required cargo bays <strong>2</strong>
                    </p>
                  </div>
                  <div class="cargo_boxes">
                  <p>Cargo boxes</p>
                  <input type="text" value={shipment.boxes}></input>
                  </div>
                </section>
              </main>
            </div>
          )
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
