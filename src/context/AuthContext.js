import {createContext, useContext, useEffect, useState} from "react"
import { Auth, auth } from "../firebase"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

const AuthContext = createContext()

export function AuthContextProvider({children}){

    const [user, setUser] = useState({})

    // signUp 

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // signIn

    function logIn(email, password){
        return signInWithEmailAndPassword (auth, email, password)
    }

    // logOut

    function logOut(){
        return (auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });

        return()=> {
            unsubscribe();
        };
    });

    return(
        <AuthContext.Provider value={{signUp, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}