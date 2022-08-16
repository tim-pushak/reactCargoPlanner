import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Shipment from '../shipment.json';
import '../components/header/header.css';
import Singleli from './singleLi';

const Layout = (props) => {  
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const filteredData = Shipment.filter((el) => {
      //if no input the return the original
      if (props.input === '') {
          return el;
      }
      //return the item which contains the user input
      else {
          return el.name.toLowerCase().includes(props.input)
      }
  })

  let loadBTN = <button onClick={handleToggle} className="load_btn btns btnInLayout">Load</button>;
  let links = 
        <section>
          <nav className="scrollBar1 companies">
            <ul>
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