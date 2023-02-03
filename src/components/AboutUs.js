import React from 'react';

const AboutUs = () => {
    const infoCompany = {
        name: 'Booking Company',
        address:
            {
                city: 'NY',
                street: 'New Hanop',
                building: 432,
            },
        phone: '34-435-453-345',
        email: 'booking@.gmail.com'
    }
    return (
        <div>
            <h3>
                {infoCompany.name}:
            </h3>
                {infoCompany.address.city}, {infoCompany.address.street}, {infoCompany.address.building}
            <br/> <strong>Our contacts: </strong>
            tel. {infoCompany.phone}
            <br/> email: {infoCompany.email}

        </div>
    );
};

export default AboutUs;