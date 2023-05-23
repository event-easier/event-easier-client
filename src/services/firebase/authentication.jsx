import {
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const client = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1/user`,
});
export const handleGoogleLogin = async (provider) => {
  const result = await signInWithPopup(auth, provider);
  const navigate = useNavigate();
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
      navigate("/home");
    } else {
      // account existed
      getAccount("users", {
        fieldName: "uid",
        operator: "==",
        compareValue: uid,
      }).then((data) => {
        setProfileData(data[0]);
        localStorage.setItem("data", JSON.stringify(data[0]));
      });
    }
  } catch (err) {
    openNotification();
  }
};

export const GoogleSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("sign out successful");
      navigate("/");
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
    await client
      .post("/login", {
        email: input,
      })
      .then((response) => {
        console.log(response);
      });
  } catch (error) {
    console.log("error: \n", error);
  }
};

export const VerifyUserByCode = async (email, verifyCode) => {
  try {
    await client
      .post("/login/verify", {
        email: email,
        code: verifyCode,
      })
      .then((response) => {
        console.log(response);
        navigate("/home");
      });
  } catch (error) {
    console.log("error: \n", error);
  }
};
