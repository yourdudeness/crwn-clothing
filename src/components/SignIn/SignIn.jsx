import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";
import FormInput from "../FomInput/FormInput";

import "./SignIn.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email,password);

      console.log(response, 'response')
      resetFormFields();
    } catch (error) {
      console.error(error)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
          Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
