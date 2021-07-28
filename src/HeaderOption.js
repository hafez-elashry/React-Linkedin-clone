import React from 'react';
import './HeaderOption.css';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({avatar, Icon, title, click}) {
    const user = useSelector(selectUser);
    return (
        <div onClick={click}  className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar &&
                <Avatar
                    className="headerOption__icon"
                    >{user?.email[0].toUpperCase()}</Avatar>}
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderOption
