import React, { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core';
import InputOption from './InputOption';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
// import { useSelector } from 'react-redux';
// import { selectUser } from './features/userSlice';


const post = forwardRef(({name, description, message, photoUrl}, ref) => {

    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                {message}
            </div>
            <div className="post__buttons">
                <InputOption 
                    Icon={ThumbUpAltIcon}
                    title="Like"
                    />
                <InputOption 
                    Icon={ChatBubbleIcon}
                    title="Comment"
                    />
                <InputOption 
                    Icon={ShareIcon}
                    title="Share"
                    />
                <InputOption 
                    Icon={SendIcon}
                    title="Send"
                    />
            </div>
        </div>
    )
})

export default post
