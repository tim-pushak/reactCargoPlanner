import './header.css';

const Header = () => {
    return (
        <header class="main__header">
            <section class="main__header_wrap">
                <div class="main__header_h1">
                    <h1>Cargo Planner</h1>
                </div> 
            <div class="searchBar">
                <form id="searchbar" action="#">
                    <input class="searchbar_input" type="text" placeholder="Search"/>
                </form>
            </div>

            <div class="main__header_btns">
                <button class="load_btn btns">Load</button>
                <button class="save_btn btns">Save</button>
            </div>
            </section>
        </header>
    )
}


export default Header;