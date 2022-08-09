import React from 'react';
import { Link } from 'react-router-dom';

const Singleli = (props) => {
    let singleLi = 
                <ul>
                  <li>
                    <p><Link to="/welmart">Welmart</Link></p>
                  </li>
                </ul> 
    return (
        <div>
            {singleLi}
        </div>
    );
}

export default Singleli;
