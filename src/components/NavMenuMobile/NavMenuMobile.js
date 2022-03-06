import './NavMenuMobile.css';
import React from 'react';

function NavMenuMobile(props) {

    //set class for open or close mobile nav menu

    let navMenuClass =  "nav-menu-mobile"

    if(props.navMenuOpen) {
        navMenuClass =  "nav-menu-mobile-open" 
    }

  return (
    <div className={navMenuClass}>
        <ul className="nav-links-mobile">
            <li className="nav-link-mobile">
            <a href="#lore" className="nav-link-mobile">
                <i className="fas fa-book"></i>
                <p className="nav-link-mobile-txt">Lore</p>
            </a>
            </li>
            <li className="nav-link-mobile">
            <a href="#roadmap" className="nav-link-mobile">
                <i className="fas fa-road"></i>
                <p className="nav-link-mobile-txt">Roadmap</p>
            </a>
            </li>
            <li className="nav-link-mobile">
                <a href="https://drive.google.com/file/d/1yNNJF44ofd2s0n4vJtYwfTlAHmYO7X_q/view" className="mobile-nav-anchor" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-book nav-menu-icon"></i>
                    <p className="nav-link-mobile-txt">White Paper</p>
                </a>
            </li>
            <li className="nav-link-mobile">
                <a href="#team" className="nav-link-mobile">
                    <i className="fas fa-users"></i>
                    <p className="nav-link-mobile-txt">Team</p>
                </a>
            </li>
            <li className="nav-link-mobile">
            <a href="https://discord.gg/6sjHkM8nTT" className="mobile-nav-anchor" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord nav-menu-icon"></i>
                <p className="nav-link-mobile-txt">Discord</p>
            </a>
            </li>
            <li className="nav-link-mobile">
                <a href="https://twitter.com/LordsofSOL" className="mobile-nav-anchor" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter nav-menu-icon"></i>
                    <p className="nav-link-mobile-txt">Twitter</p>
                </a>
            </li>
        </ul>
    </div>
  );
}

export default NavMenuMobile;