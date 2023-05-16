import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../pages/Authentication/Firebase/firebase.init';

// calling the initial authentication as initAuthentication function to run the authentication related firebase code
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();

    // observe whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [auth]);



    // google sign in
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // Sign up or Registration
    const processRegistration = (email, password) => {
        if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6}/.test(password)) {
            return new Promise((resolve, reject) =>  {
                reject({
                    message: 'Password should be at least of 6 characters and must have at least one uppercase letter, one digits, one lowercase letter'
                })
            });
        }
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // Sign in or login
    const processLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    //log out functionality
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }



    const setUserDetails = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                // window.location.reload();
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }







    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        processRegistration,
        processLogin,
        logOut,
        setUserDetails,
        setError,
        error
    }
};

export default useFirebase;