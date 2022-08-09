import { React, useState } from 'react'
import data from './shipment.json';

function List(props) {
    {/* <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                {/* <Route index element={<Home />} /> */}
                                {/* <Route path="walmart" element={<Walmart />} />
                                <Route path="exxonMobil" element={<ExxonMobil />} />
                                <Route path="apple" element={<Apple />} /> */}
                           /*  {
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
                    </BrowserRouter> */
    return (

        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul> 
    
    )
}


export default List;
