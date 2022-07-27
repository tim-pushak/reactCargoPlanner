import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="scrollBar1 companies">
        <ul>
          <li>
            <p><Link to="/">Walmart</Link></p>
          </li>
          <li>
            <p><Link to="/apple">Apple</Link></p>
          </li>
          <li>
            <p><Link to="/exxonMobil">Exxon Mobil</Link></p>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;