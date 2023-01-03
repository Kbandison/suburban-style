// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //   },
  //   []
  // );

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-In</h1>
      <button onClick={logGoogleUser}>Sign-In with Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign-In with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
