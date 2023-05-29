import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { useEffect } from "react";


export const AuthContext = createContext(null);

const Authprovider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);
    const auth = getAuth(app);
   
    const createUser = (email,password)=>{   setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const updateUser=(name,photo)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

     useEffect(()=>{  
       const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('current User', currentUser);
            setLoading(false);
        });
        return()=>{
            return unsubscribe;
        }
     }, []);


    const authInfo = {
         user,
         loading,
         createUser,
         signIn,
         logOut,
         updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;