import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';

import HeaderOption from './HeaderOption';


function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" 
                alt=""/>

                <div className='header__search'>
                    <SearchIcon />
                    <input placeholder='Search' type='text' />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption Icon={ChatIcon} title='Message' />
                <HeaderOption avatar="https://avatars0.githubusercontent.com/u/72042911?s=460&u=20fcad444baa173be213f92f9fb575abec343fa2&v=4" title='Karen' />
            </div>
        </div>
    );
}

export default Header;