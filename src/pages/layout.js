import { Outlet, Link } from "react-router-dom";
import Shipment from '../components/dataCompanies/shipment.json';
import React, { useState } from "react";
import '../components/header/header.css';

const Layout = () => {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
    <header className="main__header">
            <section className="main__header_wrap">
                <div className="main__header_h1">
                    <h1>Cargo Planner</h1>
                </div> 
            <div className="searchBar">
                <form id="searchbar" action="#">
                    <input className="searchbar_input" type="text" placeholder="Search"/>
                </form>
            </div>

            <div className="main__header_btns">
                <button onClick={handleToggle} className="load_btn btns" >Load</button>
                <button className="save_btn btns">Save</button>
            </div>
            </section>
    </header> 

 
      <section>
        <nav className="scrollBar1 companies">
          <ul>
            <li>
              <p><Link to="/walmart">Walmart</Link></p>
            </li>
            <li>
              <p><Link to="/exxonMobil">Exxon Mobil</Link></p>
            </li> 
            <li>
              <p><Link to="/apple">Apple</Link></p>
            </li>
            <li className={isActive ? "linksjsonActive" : "linksjson"}> {/* className="liList" */}
                {
                  Shipment && Shipment.map(shipment => {
                    return (
                      <p key={shipment.id}><Link to={shipment.name}>{shipment.name}</Link></p>
                    )
                  })
                }
            </li>
          </ul>
        </nav>
      </section>
    <Outlet />
    </>
  )
};


export default Layout;