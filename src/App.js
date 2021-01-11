import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import { login, logout, selectUser } from './features/counter/userSlice';
import { auth } from './firebase';

import Login from './Login';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
          dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoURL,
            })
          );
      } else {
          dispatch(logout());
      }
    });
  }, );

  return (
    <div className='app'>
      <Header />

      {!user ? (
        <Login />
      ): (
        <div className='app__body'>
          <Sidebar />
          <Feed />
        </div>
      )}

    </div>
  );
}

export default App;
