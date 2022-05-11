import React from 'react';
import './Footer.css'
const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <div className='bg-dark mt-5 text-white'>
            <h1 className='text-center'>This is Footer</h1>
            <div className='footer-description'>
                <p className='text-center'>Perfumia is a website where you can manage you product for business. We have a system where you can manage large quatity of product.</p>
                <p className='text-center'>Copyright @{year}</p>
            </div>

        </div>
    );
};

export default Footer;