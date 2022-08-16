import React from 'react';
import { Outlet } from "react-router-dom";

const Detailsforrest = ({data}) => {
    let saveBtnRest = <button className="saveBtnRest btns">Save</button>;
    return (
        <>
            <div>
                <main className="containerr">
                   
                    <section className="scrollBar2 company_details" key={data.id}>
                        <div className="company_title">
                            <h1>{data.name}</h1>
                        </div> 
                        <div className="company_email">
                            <p><a href="mailto:{data.email}">{data.email}</a></p>
                        </div> <br />
                        <div className="bays">
                            <p>
                                Number of required cargo bays <strong>2</strong>
                            </p>
                        </div>
                        <div className="cargo_boxes">
                            <p>Cargo boxes</p>
                            <input 
                                name="vasya"
                                type="text"
                                defaultValue={data.boxes}>
                            </input>
                        </div>
                    </section>
 
                    

                </main>
            </div>
        <Outlet />

        { saveBtnRest }
        </>
    )
}

export default Detailsforrest;
