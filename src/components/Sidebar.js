import React, {useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./styles/Sidebar.css";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import {Avatar, IconButton} from "@material-ui/core";
import SidebarThread from "./SidebarThread";
import {PhoneAndroidOutlined, QuestionAnswerOutlined, SettingsOutlined} from "@material-ui/icons";
import db, {auth} from "../firebase";
import {selectUser} from "../features/userSlice";
import {useSelector} from "react-redux";

const Sidebar = () => {

    const user = useSelector(selectUser);
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        db.collection('threads').onSnapshot((snapshot) =>
        setThreads(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            }))))
    }, []);

    const addThread = () => {
        const threadName =  prompt("Enter the Thread name 🚀");
        if(threadName){
            db.collection("threads").add({
                threadName: threadName,
            })
        }
    }



    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className="sidebar__searchIcon" />
                    <input type="text" placeholder="Search" className="sidebar__input"/>
                </div>
                <IconButton id="sidebar__button">
                    <BorderColorIcon onClick={addThread} />
                </IconButton>
            </div>

            <div className="sidebar__threads">
                {threads.map(({id, data: {threadName}}) => (
                    <SidebarThread  key={id} id={id} threadName={threadName}/>
                ))}

                </div>
                <div className="sidebar__bottom">
                <Avatar className="sidebar__bottom__avatar" src={user.photoURL} onClick={() => auth.signOut()} />
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
