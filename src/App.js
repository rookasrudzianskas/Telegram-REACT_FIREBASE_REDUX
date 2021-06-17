import React, {useEffect} from 'react';
import './App.css';
import Telegram from "./components/Telegram";
import Login from "./components/Login";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

function App() {

  const user = useSelector(selectUser);

  useEffect(() => {

  }, [dispatch]);

  return (
    <div className="app">
        {!user ? (
            <Login />
        ) : (
            <Telegram />
        )}

    {/*    does not work*/}
    </div>
  );
}

export default App;
