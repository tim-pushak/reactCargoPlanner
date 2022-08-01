import './header.css';
import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="main__header">
                <section className="main__header_wrap">
                    <div className="main__header_h1">
                        <h1>Cargo Planner</h1>
                    </div> 
                <div className="searchBar">
                    <form id="searchbar" action="#">
                        <input className="searchbar_input" type="text" placeholder="Search"/>
                    </form>
                </div>

                <div className="main__header_btns">
                    <button className="load_btn btns">Load</button>
                    <button className="save_btn btns">Save</button>
                </div>
                </section>
            </header> 
        </div>
    );
}

export default Header;

