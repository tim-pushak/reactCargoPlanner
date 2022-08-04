import { Outlet, Link } from "react-router-dom";
import Shipment from '../shipment.json';
import '../components/header/header.css';

const Layout = () => {
  return (
    <> 
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
            <li className="liList">
                {
                  Shipment && Shipment.map(shipment => {
                    return (
                      <p key={shipment.id}><Link to={`/${shipment.id}`}>{shipment.name}</Link></p>
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