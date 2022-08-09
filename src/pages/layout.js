import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Shipment from '../shipment.json';
import '../components/header/header.css';
import Singleli from './singleLi';

const Layout = () => {  
  /* let singleLi = 
                <ul>
                  <li>
                    <p><Link to="/welmart">Welmart</Link></p>
                  </li>
                </ul> */
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  let loadBTN = <button onClick={handleToggle} className="load_btn btns btnInLayout">Load</button>;
  let links = 
        <section>
          <nav className="scrollBar1 companies">
            <ul>
              {/* <li>
                <p><Link to="/walmart">Walmart</Link></p>
              </li>
              <li>
                <p><Link to="/exxonMobil">Exxon Mobil</Link></p>
              </li> 
              <li>
                <p><Link to="/apple">Apple</Link></p>
              </li> */}
              <Singleli />
               { loadBTN }
              
              <li className={isActive ? "linksjsonActive" : "linksjson"}>
                  {
                    Shipment && Shipment.map(shipment => {
                      return (
                        <p><Link to={`/${shipment.id}`}>{shipment.name}</Link></p>
                      )
                    })
                  }
              </li>
            </ul>
          </nav>
        </section>

  return (
    <> 
      {links}
    <Outlet />
    </>
  )
};


export default Layout;