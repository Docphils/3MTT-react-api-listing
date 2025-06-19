import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min";

export default function NavBar() {
    return (
        <header className='App-header'>
            <h3>Docphils Store</h3>
            <nav>
                <Link to='/' className="navLinks" >Home</Link>
            </nav>
        </header>
    );
}
