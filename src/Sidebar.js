import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src='' alt='' />
                <Avatar className='sidebar__avatar' />
                <h2>Karen Marlen</h2>
                <h4>karenzhec@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumer">2,33</p>
                </div>
                <div className="sidebar__stat">
                    <p> Views on post</p>
                    <p className="sidebar__statNumer">2,77</p>
                </div>
            </div>

            <div className="sidebar__botom">
                <p>Recent </p>
            </div>
        </div>
    );
}

export default Sidebar;
