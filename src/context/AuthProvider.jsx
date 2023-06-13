import React, { useState, useEffect } from "react";
import { auth } from "../services/firebase/config";
import { useNavigate, useLocation } from "react-router-dom";
export const AuthContext = React.createContext();

const unAuthPage = [
  "/",
  "/signin",
  "/signup",
  // "/user-info",
];

export default function AuthProvider({ children }) {
  const [profileData, setProfileData] = useState({
    _id: "",
    name: "",
    type: "",
    email: "",
    avatar: "",
    bio: "You can edit this!",
  });
  const navigate = useNavigate();
  const location = useLocation();
  // const [user, setUser] = useState(null);
  //   const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((userInfo) => {
      if (userInfo || localStorage.getItem("profile-data")) {
        if (unAuthPage.includes(location.pathname)) {
          navigate("/home");
        }
        return;
      }
      if (!unAuthPage.includes(location.pathname)) {
        navigate("/");
      }
    });
    return () => {
      unsubscribed();
    };
  }, [navigate, location.pathname]);
  return (
    <AuthContext.Provider
      value={{
        profileData,
        setProfileData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
