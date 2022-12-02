import React from 'react';
import "./style.css";

export const Navbar = () => {
  return (
    <div className='navContainer'>
        <nav className='nav'>
            <ul className='ulList'>
                <li>Eastaery</li>
                <li>Rent</li>
                <li>Buy</li>
                <li>Sell</li>
                <li>Manage Property</li>
                <li>Resources</li>
            </ul>
            <ul className='ulList'>
                <li><button>Login</button></li>
                <li><button>SignUp</button></li>
            </ul>
        </nav>
    </div>
  )
}
