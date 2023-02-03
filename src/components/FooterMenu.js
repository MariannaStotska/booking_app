import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const FooterMenu = () => {
    const footerMenu = [
        {
           id: uuidv4(),
           title: 'Support'
        },
        {
           id: uuidv4(),
           title: 'Help Center'
        },
        {
           id: uuidv4(),
           title: 'Cancellation option'
        },
        {
           id: uuidv4(),
           title: 'AirCover'
        },
    ]

    return (
        <div>
            <ul>
                {footerMenu.map(el => (
                <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterMenu;