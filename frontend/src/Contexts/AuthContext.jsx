import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig';

export const AuthenticationContext = createContext('');

function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [LoggedIn,setLoggedIn] = useState(false);
  const [username,setUserName] = useState('');

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const Logout = () => {
    return signOut(auth);
  };

  useEffect(() =>{
     setUserName(localStorage.getItem('username'))
  },[LoggedIn])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
    return () => unsubscribe();
  }, []);

useEffect(() =>{
   if(user){
    setLoggedIn(true)
   }else{
    setLoggedIn(false)
   }
},[user])
 

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        username,
        setUserName,
        createNewUser,
        signIn,
        Logout,
        LoggedIn,
        setLoggedIn
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthContext;
