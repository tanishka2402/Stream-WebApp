import React, { useState } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import jack_img from '../../assets/jack.png';
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebar }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const sidebar_toggle = (e) => {
        setSidebar((prev) => !prev);
    };

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img src={menu_icon} alt="" className="menu-icon" onClick={sidebar_toggle} />
                <Link to='/'> <img src={logo} alt="" className="logo" /></Link>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search" />
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img src={jack_img} alt="" className="user-icon" onClick={toggleDropdown} />
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <div className="dropdown-item"></div>
                        <div className="dropdown-item"></div>
                        <div className="dropdown-item"></div>
                        <div className="dropdown-item"></div>
                        <div className="dropdown-item"></div>
                        <div className="dropdown-item"></div>
                        <div className="dropdown-item"></div>
                        <div className="dropdown-item"></div>

                        {isDropdownOpen && (
    <div className="dropdown-menu">
        <div className="dropdown-item">
            <img src={jack_img} alt="Account" /> {/* Replace with appropriate icon */}
            Account Details
        </div>
        <div className="dropdown-item">
            <img src={jack_img} alt="Login Info" /> {/* Replace with appropriate icon */}
            Login Info
        </div>
        <div className="dropdown-item">
            <img src={jack_img} alt="Settings" /> {/* Replace with appropriate icon */}
            Settings
        </div>
        <div className="dropdown-item">
            <img src={jack_img} alt="Logout" /> {/* Replace with appropriate icon */}
            Logout
        </div>
        <div className="dropdown-item">
            <img src={jack_img} alt="History" /> {/* Replace with appropriate icon */}
            History
        </div>
        <div className="dropdown-item">
            <img src={jack_img} alt="Liked Videos" /> {/* Replace with appropriate icon */}
            Liked videos
        </div>
        <div className="dropdown-item">
            <img src={jack_img} alt="Playlists" /> {/* Replace with appropriate icon */}
            Playlists
        </div>
        <div className="dropdown-item">
            <img src={jack_img} alt="Favorties" /> {/* Replace with appropriate icon */}
            Favorties
        </div>
    </div>
)}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
