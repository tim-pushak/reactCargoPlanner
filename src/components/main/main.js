import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shipment from '../../shipment.json';

import Layout from '../../pages/layout';
import Home from '../../pages/home';
import Apple from '../../pages/apple';
import Walmart from '../../pages/walmart';
import ExxonMobil from '../../pages/exxonMobil';
import Detailsforrest from '../../pages/detailsForRest';

const Main = () => {
    let nav = <section className="scrollBar2 companies react_wrapper">
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="walmart" element={<Walmart />} />
                <Route path="exxonMobil" element={<ExxonMobil />} />
                <Route path="apple" element={<Apple />} />
                {
                    Shipment && Shipment.map(shipment => {
                        return (
                            <>
                                <Route key={shipment.id} path={`/${shipment.id}`} element={<Detailsforrest shipment={shipment} />} /> 
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
