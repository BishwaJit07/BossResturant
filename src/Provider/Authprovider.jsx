import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { useEffect } from "react";
import axios from "axios";


export const AuthContext = createContext(null);

const Authprovider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);
    const auth = getAuth(app);
   
    const createUser = (email,password)=>{   setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const Googleprovider = new GoogleAuthProvider();
    const updateUser=(name,photo)=>{
        return updateProfile(auth.currentUser, {
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
    
   const googleSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth, Googleprovider)
   }

     useEffect(()=>{  
       const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('current User', currentUser);

            // get and set token
           if(currentUser){
            axios.post('http://localhost:5000/jwt',{ email: currentUser.email})
            .then(data=>{
                console.log(data.data.token);
                localStorage.setItem('access-token', data.data.token )
            })
           }
           else{ localStorage.removeItem('access-token', )}

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
         updateUser,
         googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;