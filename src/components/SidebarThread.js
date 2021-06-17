import React from 'react';
import "./styles/SidebarThread.css";
import {Avatar} from "@material-ui/core";
import db from "../firebase";

const SidebarThread = () => {

    const dispatch = useDispatch();
    const [threadInfo, setThreadInfo] = useState([]);


    useEffect(() => {
        db.collection('threads')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setThreadInfo(snapshot.docs.map((doc) => doc.data()))
            );
    }, []);
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
