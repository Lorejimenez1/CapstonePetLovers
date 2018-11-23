import React from 'react';
import { Link} from 'react-router-dom';
import './navbar.css';



export default function NavigationBar(props) {
    return (
        <div className="">
            <nav className="navbar">
                <a className="nav-header">PetLovers</a>
                <ul className="main-nav">
                    <li>
                        <a href="/" className="nav-links">Petfinder</a>
                        <Link to={`/`}></Link>
                    </li>
                    <li>
                         <Link to={'/event-finder'}></Link>
                         <a href="/event-finder" className="nav-links">Eventfinder</a>
                    </li>     
                </ul>
            </nav>
        </div>
    );
}