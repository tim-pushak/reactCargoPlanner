import { Outlet, Link } from "react-router-dom";
import Shipment from '../shipment.json';
import '../components/header/header.css';

const Layout = () => {  
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
              <li id="liList" className="liList">
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