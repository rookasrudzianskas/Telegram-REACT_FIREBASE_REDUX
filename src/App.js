import React, {useEffect} from 'react';
import './App.css';
import Telegram from "./components/Telegram";
import Login from "./components/Login";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import {auth} from "./firebase";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // login here
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))

      } else {
        // logout here

        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
        {user ? (
            <Login />
        ) : (
            <Telegram />
        )}

    </div>
  );
}

export default App;
