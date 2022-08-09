import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shipment from '../../shipment.json';

import Detailsforrest from '../../pages/detailsForRest';
import Layout from '../../pages/layout';
/* import Home from '../../pages/oldPages/home';
import Apple from '../../pages/oldPages/apple';
import Walmart from '../../pages/oldPages/walmart';
import ExxonMobil from '../../pages/oldPages/exxonMobil'; 
import Stack from '../../pages/stack'; */

const Main = () => {
    

    let nav = 
        <section className="scrollBar2 companies react_wrapper">
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {/* <Route index element={<Home />} /> */}
                        {/* <Route path="walmart" element={<Walmart />} />
                        <Route path="exxonMobil" element={<ExxonMobil />} />
                        <Route path="apple" element={<Apple />} /> */}
                    {
                        Shipment && Shipment.map(shipment => {
                            return (
                                <>
                                    <Route path={`/${shipment.id}`} element={<Detailsforrest shipment={shipment} />} /> 
                                </>
                            )
                        })
                    }
                    </Route>
                </Routes>
            </BrowserRouter>
        </section>
    
    
    return (
        <div>
            {nav}
        </div>
    );
}

export default Main;
