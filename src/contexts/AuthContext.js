//import react library
import React, { useContext, useEffect, useState } from "react";
import '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { unstable_useBlocker } from "react-router-dom";

//create a react context and store it inside a variable
const AuthContext = React.createContext();

export function useAuth() {
  const useContext(AuthContex);

}

//create a function name authProvider
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      return unsubscribe;
    }, []);
})

  // signup function
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    //update profile
    await (updateProfile(auth.currentUser, {
      displayName: username
    }))  
  }
  
  //login funciton
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  //log out function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }


  const value = {
   currentUser, signup, login, logout
 }

  <AuthContext.Provider value={value}>
    {!loading && children}
  </AuthContext.Provider>;
}
