import React from 'react';
import "./styles/SidebarThread.css";
import {Avatar} from "@material-ui/core";

const SidebarThread = () => {
    return (
        <div className="sidebarThread">
            <Avatar />
            <div className="sidebarThread__details">
                    <h3 className="">Thread Name</h3>
                <p>This is the info</p>
                <small className="sidebarThread__timestamp">Timestamp goes in here</small>
            </div>
        </div>
    );
};

export default SidebarThread;
