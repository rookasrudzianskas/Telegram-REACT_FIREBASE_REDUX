import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./styles/Sidebar.css";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import {Avatar, IconButton} from "@material-ui/core";
import SidebarThread from "./SidebarThread";
import {PhoneAndroidOutlined, QuestionAnswerOutlined, SettingsOutlined} from "@material-ui/icons";
import {auth} from "../firebase";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className="sidebar__searchIcon" />
                    <input type="text" placeholder="Search" className="sidebar__input"/>
                </div>
                <IconButton id="sidebar__button">
                    <BorderColorIcon />
                </IconButton>
            </div>

            <div className="sidebar__threads">
                <SidebarThread />
                <SidebarThread />
                <SidebarThread />

                </div>
                <div className="sidebar__bottom">
                <Avatar className="sidebar__bottom__avatar" onClick={() => auth.signOut()} />
                    <IconButton>
                        <PhoneAndroidOutlined />
                    </IconButton>
                    <IconButton>
                        <QuestionAnswerOutlined />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined />
                    </IconButton>
            </div>
        </div>
    );
};

export default Sidebar;
