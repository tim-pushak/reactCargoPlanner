import React from 'react';
import { Outlet } from "react-router-dom";
/* import Stack from './stack'; */

const Detailsforrest = ({shipment}) => {
    /* let stack = <Stack /> */
    let saveBtnRest = <button className="saveBtnRest btns">Save</button>;
    return (
        <>
            <div>
                <main className="containerr">
                   
                    <section className="scrollBar2 company_details" key={shipment.id}>
                        <div className="company_title">
                            <h1>{shipment.name}</h1>
                        </div> 
                        <div className="company_email">
                            <p><a href="mailto:{shipment.email}">{shipment.email}</a></p>
                        </div> <br />
                        <div className="bays">
                            <p>
                                Number of required cargo bays <strong>2</strong>
                            </p>
                        </div>
                        <div className="cargo_boxes">
                            <p>Cargo boxes</p>
                            <input type="text" defaultValue={shipment.boxes}></input>
                        </div>
                    </section>
 
                    

                </main>
            </div>
        <Outlet />

        {/* {stack} */}
        { saveBtnRest }
        </>
    )
}

export default Detailsforrest;
