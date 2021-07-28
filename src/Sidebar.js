import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hashtag">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                    src="https://media-exp3.licdn.com/dms/image/C4E16AQGhWCiWu50lQw/profile-displaybackgroundimage-shrink_350_1400/0/1624796602565?e=1631750400&v=beta&t=0LLagxp7WiWScm9hAxZGSWMztCVwFbpA23-qSj0bJV0" 
                    alt=""/>
                <Avatar 
                    className="sidebar__avatar"
                    src={user.photoURL}>{user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h5>{user.email}</h5>
            </div>

            <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__stateNumber">7346</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__stateNumber">56</p>
                    </div>
                </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("React js")}
                {recentItem("React Native")}
                {recentItem("C Sharp")}
                {recentItem("Java Script")}
                {recentItem("Java")}
            </div>
        </div>
    )
}

export default Sidebar
