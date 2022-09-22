import React from 'react';
import logo from '../Images/logo-invoke.png'
import '../global.css'

export default function Header() {
    return(
        <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
            <a href='#'className='navbar-brand'><img src={logo} className='header-logo'/></a>
            <div className='collapse navbar-collapse' id='navbarColor01'>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                    <a className='nav-link' href='#'>Digital Light Process(DLP)</a>
                </li>
                <li className='nav-item active'>
                    <a className='nav-link' href='#'>Selective Laser Sintering(SLS)</a>
                </li>
                <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' data-toggle='dropdown' id='dropdown' aria-haspopup='true' aria-expanded='false' href='#'>Electron Beam Melting(EBM)</a>
                    <div className='dropdown-menu' aria-labelledby='dropdown'>
                        <a className='dropdown-item' href='#'>3D CAD model</a>                        
                        <a className='dropdown-item' href='#'>hard tissues</a>                        
                        <a className='dropdown-item' href='#'>rapid prototyping</a>                        
                    </div>
                </li>
            </ul>
            <div className='form-inline'>
                <input className='searchbox mr-sm-2 w-auto' type='search' placeholder='Search' aria-label='Search'/>
                <button className='btn btn-outline-info my-2 my-sm-0' type='submit'>Search</button>
            </div>
            <div>

            </div>
            <div className='pleft-20'>
            <ul class="navbar-nav mr-auto">
    <li className='nav-item'><a href='#!' className='nav-link'>Sign In/Register</a></li>
                <li className='nav-item nav-bag'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                </svg>
                <span className='bag-quantity'>
                    <span>0</span>
                </span>
            </li>
    </ul>
            </div>
        </div>
    
    {/* <ul class="navbar-nav mr-auto">
    <li class="form-inline">
      <input class="form-control mr-sm-2 w-auto" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0 w-10" type="submit">Search</button>
    </li>
    </ul>
    <ul class="navbar-nav mr-auto">
    <li className='nav-item'><a href='#!' className='nav-link'>Sign In/Register</a></li>
                <li className='nav-item nav-bag'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                </svg>
                <span className='bag-quantity'>
                    <span>0</span>
                </span>
            </li>
    </ul> */}
        
            </div>
        
        
        </nav>
        </>
    )
}