import React from 'react'

import { Link } from 'react-router-dom'


import './Nabar.css'



function NavBar() {




    return (
        <div style={{backgroundColor:'#373A39'}} className="navbar">


            <nav className="nav-item">
                <ul style={{ listStyle: 'none', marginTop: "0px" , marginRight:730}}>

                    <li><Link className='nav-links' to="./">Home</Link></li>
                    {/* <li ><Link className='nav-link' to="./Buy">Buy</Link></li> */}

                </ul>
            </nav>
        </div>
    )
}
export default NavBar;