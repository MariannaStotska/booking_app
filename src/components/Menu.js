import React from 'react';

const Menu = () => {
    const headerMenu = ['Home', 'Apartments', 'Condos', 'Houses', 'Townhouses'];

    return (
        <div>
            {headerMenu.map((el, i) =>
                <li key={i}> {el} </li>
            )}

        </div>
    );
};

export default Menu;