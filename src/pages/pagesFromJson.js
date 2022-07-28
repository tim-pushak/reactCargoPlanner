import React from 'react';
import Shipment from '../components/dataCompanies/shipment.json';

const Pagesfromjson = () => {
    return (
        <div>
            {
                Shipment && Shipment.map(shipment => {
                    return (
                        function Planner (title, email, desc, input) {
                            this.title = title;
                            this.title = email;
                            this.title = desc;
                            this.title = input;
                        }

                        
                    )
                })
            }             
        </div>
    );
}

export default Pagesfromjson;