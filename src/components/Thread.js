import React from 'react';
import "./styles/Thread.css";
import {Avatar, IconButton} from "@material-ui/core";
import {MoreHoriz} from "@material-ui/icons";

const Thread = () => {

    const sendMessage = (e) => {
        e.preventDefault();

    }
    return (
        <div className="thread">
            <div className="thread__header">
                <div className="thread__header__contents">
                    <Avatar />
                    <div className="thread__header__contents__info">
                        <h4>ThreadName</h4>
                        <h5>Last seen</h5>
                    </div>
                </div>
            <IconButton>
                <MoreHoriz className="thread__header__details" />
            </IconButton>
            </div>

            <div className="thread__messages">

            </div>

            <div className="thread__input">
                <form action="">
                    <input type="text" placeholder="Write a message..."/>
                    <button type="submit" hidden onClick={sendMessage}></button>
                </form>
            </div>
        </div>
    );
};

export default Thread;
