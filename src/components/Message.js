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
            <p className="message_p">
                {message}
                {timestamp && (
                    <small className={`timestamp ${user?.email === email ? 'user--timestamp' : ''}`}>
                        timestamp
                    </small>
                )}
            </p>
        </div>
    );
});

export default Message;