import { React } from 'react';
import "./Header.css"

function Header() {
    return (
        <div className='header'>
            <h3 id="title">Family Wellness</h3>
            <p>Massage Therapy</p>

            <div className="list-container">
                <ul className='nav-links'>
                    <li id='home' >HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>FAQ</li>
                    <li>CONTACT</li>

                </ul>

            </div>
        </div>
    )
}

export default Header;
