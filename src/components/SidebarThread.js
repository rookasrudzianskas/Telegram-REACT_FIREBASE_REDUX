import React, {useEffect, useState} from 'react';
import "./styles/SidebarThread.css";
import {Avatar} from "@material-ui/core";
import db from "../firebase";
import {setThread} from "../features/threadSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";

const SidebarThread = ({id, threadName}) => {

    const dispatch = useDispatch(selectUser);
    const [threadInfo, setThreadInfo] = useState([]);


    useEffect(() => {
        db.collection('threads')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setThreadInfo(snapshot.docs.map((doc) => doc.data()))
            );
    }, [id]);


    return (
        <div className="sidebarThread" onClick={() => dispatch(
            setThread({
                    threadId: id,
                    threadName: threadName,
                })
            )
        }
        >
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
