/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useEffect, useState } from "react";
import { app } from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,} from 'firebase/auth'
import { removeToken } from "../api/auth";







export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {


    
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)
    
      //1. Create User
      const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
   }
    
      //   2. Update Name
      const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }
    
      //   3. Email Verify
      const verifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
      }
    
      // 4. Google Signin
      const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }
    
      // 5. Logout
      const logout =async() => {
        setLoading(true)
        await removeToken
        return signOut(auth)
      }
    
      //6. Login with Password
      const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      //7. Forget Password
      const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
      }
    
      useEffect(() => {
        //this part will execute once the component is mounted.
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user---->",currentUser);
          setUser(currentUser)
          setLoading(false)
        })

        return () => {
            //this part will execute once the component is unmounted.
           return unsubscribe()
          }
        }, []) 






    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        verifyEmail,
        signInWithGoogle,
        logout,
        signin,
        resetPassword,
       
      }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
      )
};

export default AuthProvider;