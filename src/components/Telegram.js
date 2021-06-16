import React from 'react';
import Sidebar from "./Sidebar";
import Thread from "./Thread";
import "./styles/Telegram.css";


const Telegram = () => {
    return (
        <div className="telegram">
            <Sidebar />
            <Thread />

        </div>
    );
};

export default Telegram;
