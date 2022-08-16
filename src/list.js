import { React } from 'react';
import data from './shipment.json';

function List (props) {
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    }) 

    return (
        <section className="scrollBar2 companies react_wrapper">
            <ul>
                {filteredData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </section>    
    ) 
}


export default List;
