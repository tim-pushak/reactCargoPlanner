import React from 'react';

const ExxonMobil = () => {
    return (
        <main className="containerr">
            <section className="scrollBar2 company_details">
                <div className="company_title">
                    <h1>Exxon Mobil</h1>
                </div> 
                <div className="company_email">
                    <p><a href="mailto:contact@exxonmobil.com">contact@exxonmobil.com</a></p>
                </div> <br />
                <div className="bays">
                    <p>
                        Number of required cargo bays <strong>2</strong>
                    </p>
                </div>
                <div className="cargo_boxes">
                    <p>Cargo boxes</p>
                    <input type="text" defaultValue=""></input>
                </div>
            </section>     
        </main>
    )
}

export default ExxonMobil;
