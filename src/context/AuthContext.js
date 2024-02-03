import {createContext, useContext, useEffect, useState} from "react"
import { Auth } from "../firebase"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

const AuthContext = createContext()

export function AuthContextProvider({children}){

    const [] = useState({})

    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}