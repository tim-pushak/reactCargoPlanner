import './App.css';
import Shipment from './shipment.json';



function App() {
  return (
    <div className="App">

      {
        Shipment.map(shipment => {
          return (
            <div className="box" key={shipment.id}>
              <header class="main__header">
                <section class="main__header_wrap">
                  <div class="main__header_h1">
                    <h1>Cargo Planner</h1>
                  </div> 
                  <div class="searchBar">
                    <form id="searchbar" action="#">
                      <input class="searchbar_input" type="text" placeholder="Search"/>
                    </form>
                  </div>

                  <div class="main__header_btns">
                    <button class="load_btn btns">Load</button>
                    <button class="save_btn btns">Save</button>
                  </div>
                </section>
              </header>

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

              <footer class="main_footer">
                <p></p>
              </footer>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
