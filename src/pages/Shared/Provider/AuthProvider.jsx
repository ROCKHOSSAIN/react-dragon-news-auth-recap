import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setloading] = useState(true)
    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setloading(true);

        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setloading(true);

        return signOut(auth)
    }

    useEffect(() => { //jehetu new value ashtase fetch er maddome tai useeffect
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state', currentUser)
            setUser(currentUser)
            setloading(false)
        });
        return () => {
            unSubscribe();//new value assign er jonno khali kortase
        }
    }, [])

    const authinfo = {
        user,
        createUser,//email,password er value gula nia firebase re pathabo and onno file(register,login) e use korbo
        signIn,
        logOut,
        loading
    }
    return (
        //authinfo ei value er vitor e ja ja ase use context diye sob use korbo
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;