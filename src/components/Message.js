import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import './styles/Message.css';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const Message = forwardRef(({ id, content: { email, photo, message, timestamp } }, ref) => {
    const user = useSelector(selectUser);
    return (
        <div ref={ref} className={`message ${user?.email === email ? 'message__sender' : ''}`}>
            <Avatar src={photo} className="message__photo" />
            <div className="message__contents">
                <p>{message}</p>
                {timestamp && (
                    <small className={`timestamp ${user?.email === email ? 'user--timestamp' : ''}`}>
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </small>
                )}
            </div>
        </div>
    );
});

export default Message;