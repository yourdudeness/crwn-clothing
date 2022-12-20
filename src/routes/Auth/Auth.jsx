import { getRedirectResult } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";

const Auth = () => {


  // const logGoogleRedirectUser = async () => {
  //   const {user} = await signInWithgoogleRedirect();
  //   console.log(user, 'user')
  // };

  // useEffect(async()=>{
  //   const response = await getRedirectResult(auth)
  //   if(response){
  //     const userDocRef= await createUserDocumentFromAuth(response.user)
  //   }
  // },[])

  return (
    <div>
      <h1>Sign in page</h1>

      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
