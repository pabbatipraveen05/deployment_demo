import React from 'react';

export default function Footer(){
    return(
        <>
        <div className='content'>
        <div className='container'>
            <footer>
                <div className='row'>
                <div className='col mb-3'>
                    <h5 className='text-uppercase'>Get to Know Us</h5>
                    <ul className='nav flex-column'>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>About Us</a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>Contact Us</a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>Careers</a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>Corporate Information</a>
                        </li>
                    </ul>
                </div>
                <div className='col mb-3'>
                    <h5 className='text-uppercase'>Help</h5>
                    <ul className='nav flex-column'>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>Payments</a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>Shipping</a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>Cancellation</a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>Returns</a>
                        </li>
                    </ul>
                </div>
                <div className='col mb-3'>
                    <h5 className='text-uppercase'>Social</h5>
                    <ul className='nav flex-column'>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>Facebook</a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>Twitter</a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>Youtube</a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a href='' className='nav-link p-0 text-muted'>Corporate Information</a>
                        </li>
                    </ul>
                </div>
                </div>
                <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
                    <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                    <ul className='list-unstyled d-flex'>
                        <li className='ms-3'>
                            <a href=''><i className='bi bi-google'></i></a>
                        </li>
                        <li className='ms-3'>
                            <a href=''><i className='bi bi-facebook'></i></a>
                        </li>
                        <li className='ms-3'>
                            <a href=''><i className='bi bi-twitter'></i></a>
                        </li>
                        <li className='ms-3'>
                            <a href=''><i className='bi bi-linkedin'></i></a>
                        </li>
                        <li className='ms-3'>
                            <a href=''><i className='bi bi-instagram'></i></a>
                        </li>
                    </ul>
        
                </div>
            </footer>
        </div>
        </div>
       </>
    )
}