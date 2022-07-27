import React from 'react';

const Apple = () => {
    return (
        <main className="containerr">
            <section className="scrollBar2 company_details">
                <div className="company_title">
                    <h1>Apple</h1>
                </div> 
                <div className="company_email">
                    <p><a href="mailto:contact@apple.com">contact@apple.com</a></p>
                </div> <br />
                <div className="bays">
                    <p>
                        Number of required cargo bays <strong>2</strong>
                    </p>
                </div>
                <div className="cargo_boxes">
                    <p>Cargo boxes</p>
                    <input type="text" value="9.6,3.5"></input>
                </div>
            </section>     
        </main>
    )
}

export default Apple;
