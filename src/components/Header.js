import React from 'react'
import img from "./beta_logo.png"
import Button from './Button'
import {Link} from 'react-router-dom';


const logoStyle = {
    textDecoration:"none",
    color: "black"
};

const buttonStyle = {
    textDecoration: 'none',
    color: "white"
};

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">

                <Link to='/'>
                    <img src={img} id="beta_logo" />
                </Link>

                <Link to='/' style={logoStyle}>
                    <h1 id="logo_name">Forkli</h1>
                </Link>
                
            </div>

            <div className="header_right">

                <Link to='/login' style={buttonStyle}>
                    <Button color="#76323F" text="Login" />
                </Link>
                

                <Link to='/signup' style={buttonStyle}>
                    <Button color="#76323F" text="Sign Up" />
                </Link>
               
            </div>


        </div>
    )
}

export default Header
