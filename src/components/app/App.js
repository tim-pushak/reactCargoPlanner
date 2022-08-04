import './App.css';
/* import Shipment from '../dataCompanies/shipment.json'; */

import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Footer from '../footer/footer';


function App() {
  return (
    <div className="App">
      <Header />

      <Main />

      <Footer/>
    </div>
  );
}

export default App;
