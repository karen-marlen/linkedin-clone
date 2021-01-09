import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">

            </span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1586745370973-343d1ba81ed2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bWluaW1hbGlzdCUyMGtleWJvYXJkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='' />
                <Avatar className='sidebar__avatar' />
                <h2>Karen Marlen</h2>
                <h4>karenzhec@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,33</p>
                </div>
                <div className="sidebar__stat">
                    <p> Views on post</p>
                    <p className="sidebar__statNumber">2,77</p>
                </div>
            </div>

            <div className="sidebar__botom">
                <p>Recent </p>
            </div>
        </div>
    );
}

export default Sidebar;
