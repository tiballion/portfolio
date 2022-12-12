import React from "react";

import './styles/footer.css';


function Footer() {

    const handleEmail = () => {
        navigator.clipboard.writeText('timothee.ballion.33@gmail.com');
        alert('Email copied to clipboard');
    }

    const handlePhone = () => {
        navigator.clipboard.writeText('+33 7 82 95 00 32');
        alert('Phone number copied to clipboard');
    }

    return (
        <div className="Footer">
            <div className="footer-links">
                <a 
                onClick={handleEmail}>
                    <span className="emailtooltip">timothee.ballion.33@gmail.com</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
                <a
                onClick={handlePhone}>
                    <span className="phonetooltip">+33 7 82 95 00 32</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
            </div>
            <p className="footer-text">
                © 2022 Timothée Ballion. All rights reserved.
            </p>
        </div>
    );
}

export default Footer;