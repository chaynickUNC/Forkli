import React from 'react';
import {Link} from 'react-router-dom';

const footerStyle = {
    color: 'white', 
    textDecoration: "none"
};

const Footer = () => {
    return (
        <div className="footer">

            <Link to='/about' style={footerStyle}>
                <p className="footer_tag">About Us</p>
            </Link>
            
            {/* <Link>
                <p className="footer_tag">Privacy Policy</p>
            </Link>

            <Link>
                <p className="footer_tag">Terms of Use</p>
            </Link>

            <Link>
                <p className="footer_tag">Contact</p>
            </Link> */}
            
        </div>
    )
}

export default Footer
