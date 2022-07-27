import React from 'react';

const Home = () => {
    return (
        <main className="containerr">
            <section className="scrollBar2 company_details">
                <div className="company_title">
                    <h1>Walmart</h1>
                </div> 
                <div className="company_email">
                    <p><a href="mailto:contact@walmart.com">contact@walmart.com</a></p>
                </div> <br />
                <div className="bays">
                    <p>
                        Number of required cargo bays <strong>2</strong>
                    </p>
                </div>
                <div className="cargo_boxes">
                    <p>Cargo boxes</p>
                    <input type="text" value="3.3,3,3.2,1.6,5.4,2.1,2.7,4.6"></input>
                </div>
            </section>     
        </main>
        
    ) 
}

export default Home;
