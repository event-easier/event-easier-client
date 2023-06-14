import {
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";
import axios from "axios";

const client = axios.create({
  baseURL: `https://event-easier-staging.onrender.com/api/v1/user`,
});
export const handleGoogleLogin = async (provider) => {
  const result = await signInWithPopup(auth, provider);
  try {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const detail = getAdditionalUserInfo(result);
    const { email, photoURL, uid } = user;
    setUser({
      email: email,
      photoURL: photoURL,
      uid: uid,
    });
    if (detail.isNewUser) {
      console.log("it is new user!");
    } else {
      // account existed
      getAccount("users", {
        fieldName: "uid",
        operator: "==",
        compareValue: uid,
      }).then((data) => {
        localStorage.setItem("data", JSON.stringify(data[0]));
      });
    }
  } catch (err) {
    openNotification();
  }
};

export const GoogleSignOut = () => {
  signOut(auth)
    .then((res) => {
      console.log("sign out successful");
      localStorage.removeItem("profile-data");
      return "this is a placeholder so that I can log out peacefully without any bugs";
    })
    .catch((error) => {
      console.log("error: \n", error);
    });
};

export const RegisterByEmail = async (input) => {
  try {
    await client
      .post("/register", {
        email: input.email,
        name: input.name,
        avatar: input.avatar,
        type: input.type,
      })
      .then((response) => {
        console.log(response);
      });
  } catch (error) {
    console.log("error: \n", error);
  }
};

export const LoginByEmail = async (input) => {
  try {
    const result = await client
      .post("/login", {
        email: input,
      })
      .then((response) => {
        console.log(response);

        return response;
      });
    return result;
  } catch (error) {
    console.log("error: \n", error);
  }
};

export const VerifyUserByCode = async (email, verifyCode) => {
  try {
    const result = await client
      .post("/login/verify", {
        email: email,
        code: verifyCode,
      })
      .then((response) => {
        console.log(response);
        return response;
      });
    return result;
  } catch (error) {
    console.log("error: \n", error);
  }
};
