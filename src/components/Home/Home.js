import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import app from "../../fireSometing";
const Home = () => {
  const auth = getAuth(app);
  const [name, setName] = useState([]);
  const [signInWithGoogle, userforgoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub, userforgithub] = useSignInWithGithub(auth);
  // const [signInWithFacebook, userforfacebook] = useSignInWithFacebook(auth);
  if (userforgithub) {
    console.log(userforgithub.user);
  }
  if (userforgoogle) {
    console.log(userforgoogle.user);
  }
  // if (userforfacebook) {
  //   console.log(userforfacebook.user);
  // }
  return (
    <div className="App">
      <button onClick={() => signInWithGoogle()}>Sign In with google</button>
      <button onClick={() => signInWithGithub()}>Sign In with github</button>
      {/* <button onClick={() => signInWithFacebook()}>
        Sign In with facebook
      </button> */}
    </div>
  );
};

export default Home;
