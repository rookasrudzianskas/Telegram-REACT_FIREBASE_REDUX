import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import './styles/Message.css';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const Message = forwardRef(({ id, content: { email, photo, message, timestamp } }, ref) => {
    const user = useSelector(selectUser);
    return (
        <div ref={ref} className={`message ${user?.email === email ? 'user--message' : ''}`}>
            <Avatar src={photo} className="message__avatar" />
            <p>
                {message}
            </p>
        </div>
    );
});

export default Message;