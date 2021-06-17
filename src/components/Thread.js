import React, {useState} from 'react';
import "./styles/Thread.css";
import {Avatar, IconButton} from "@material-ui/core";
import {MicNoneOutlined, MoreHoriz, SendRounded, TimerOutlined} from "@material-ui/icons";
import db from "../firebase";
import firebase from "firebase";
import {useSelector} from "react-redux";

const Thread = () => {

    const [input, setInput] = useState();
    const user = useSelector();
    const [messages, setMessages] = useState([]);


    const sendMessage = (e) => {
        e.preventDefault();

        // firebase stuff goes in here

        db.collection("threads").doc(threadId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp,
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        })

        setInput(" ");

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
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Write a message..."/>
                    <IconButton type="submit" onClick={sendMessage}>
                        <SendRounded />
                    </IconButton>

                    <IconButton>
                        <MicNoneOutlined />
                    </IconButton>

                    <IconButton>
                        <TimerOutlined />
                    </IconButton>

                </form>
            </div>
        </div>
    );
};

export default Thread;
