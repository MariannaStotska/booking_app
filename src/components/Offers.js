import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const Offers = () => {
    const villas = [
        {
            id: uuidv4(),
            title: 'Villa sea view',
            address: {
                state: 'NY',
                city: 'Central Valley',
                street: 'Bloodgood',
                building: 706
            },
            price: 2000000,
            description: '2 bedroom, sea view, 2000 sqft'
        },
        {
            id: uuidv4(),
            title: 'Villa Mountain view',
            address: {
                state: 'CA',
                city: 'LA',
                street: 'Bledi',
                building: 7
            },
            price: 90000000,
            description: '6 bedroom, mountain view, 5000 sqft'
        },
        {
            id: uuidv4(),
            title: 'Villa with balcony',
            address: {
                state: 'NC',
                city: 'Central',
                street: 'Hight',
                building: 23
            },
            price: 8700000,
            description: '4 bedroom, 3500 sqft'
        }
    ]

    return (
        <div>
            <ul>
            {villas.map((el, i) =>(
                <li key={el.id}>
                    <hr/>
                    <strong> {el.title} </strong>
                    <br/>
                    <i>
                      {el.address.city + ' '+ el.address.street + ' '+ el.address.building}
                    </i>
                    <br/> {el.description}
                    <br/> Price: $ {el.price}
                </li>

                )
            )
            }
            </ul>
        </div>
    );
};

export default Offers;