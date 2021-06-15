import React from 'react';
import "./styles/SidebarThread.css";
import {Avatar} from "@material-ui/core";

const SidebarThread = () => {
    return (
        <div className="sidebarThread">
            <Avatar />
                <h3>Thread Name</h3>
            <p>This is the info</p>
            <small>Timestamp goes in here</small>
        </div>
    );
};

export default SidebarThread;
