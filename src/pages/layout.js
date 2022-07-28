import { Outlet, Link } from "react-router-dom";
import Shipment from '../components/dataCompanies/shipment.json';

const Layout = () => {
  return (
    <>
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
          <li>
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

      <Outlet />
    </>
  )
};

export default Layout;