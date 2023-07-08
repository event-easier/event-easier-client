import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState, useEffect, useRef } from "react";
export const CalendarContext = React.createContext("");
import { Link as ReactLink, useNavigate } from "react-router-dom";

export default function CalendarProvider({ children }) {
  let a = JSON.parse(localStorage.getItem("profile-data"));

  const client = axios.create({
    // baseURL: `http://localhost:8081/api/v1/calendar/`,
    baseURL: "https://event-easier-staging.onrender.com/api/v1/calendar/",
  });

  client.interceptors.request.use((config) => {
    config.headers.Authorization = `bearer ${a.token}`;
    return config;
  });
  const imgBackground = [
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=716.8/calendar-defaults/patterns/diamonds-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/dots-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/metaballs-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/rain-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/squares-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/stairs-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/waves-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/perlin-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/grid-100.png",
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=512/calendar-defaults/patterns/warp-100.png",
  ];

  const radioOptions = [
    { value: "#D2D4D7", bgColor: "#D2D4D7" },
    { value: "#E6658A", bgColor: "#E6658A" },
    { value: "#CC62D5", bgColor: "#CC62D5" },
    { value: "#B596FF", bgColor: "#B596FF" },
    { value: "#3787FF", bgColor: "#3787FF" },
    { value: "#47C97E", bgColor: "#47C97E" },
    { value: "#FBD85B", bgColor: "#FBD85B" },
    { value: "#FF9641", bgColor: "#FF9641" },
    { value: "#FF5965", bgColor: "#FF5965" },
  ];
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [valueColor, setValueColor] = useState("#D2D4D7");
  const colorPickerRef = useRef(null);
  const calendarRef = React.useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [upLoadCover, setUpLoadCover] = useState(false);
  const [error, setError] = useState(null);
  const [background, setBackground] = useState(
    "https://images.lumacdn.com/cdn-cgi/image/fit=cover,dpr=2,quality=80,width=716.8/calendar-defaults/patterns/diamonds-100.png"
  );
  const [avatar, setAvatar] = useState(
    "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=80,width=34,height=34/avatars-default/community_avatar_5.png"
  );
  const [formData, setFormData] = useState({
    type: "ADMIN",
    cover: "",
    avatar: "",
    calendarName: "",
    description: "",
    color: "",
    url: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRadioClick = () => {
    setShowColorPicker(!showColorPicker);
  };
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };
  const handleClickOutside = (event) => {
    if (
      colorPickerRef.current &&
      !colorPickerRef.current.contains(event.target)
    ) {
      setShowColorPicker(false);
    }
  };
  useEffect(() => {
    if (showColorPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showColorPicker]);

  const handleChangedata = (e) => {
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;
    if (e.target.name === "url") {
      if (!alphanumericRegex.test(e.target.value)) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsInvalid(true);
        }, 2000);
      } else {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsInvalid(false);
        }, 2000);
      }
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadImage = (e) => {
    if (e.target.name === "avata-image") {
      const file = e.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
    if (e.target.name === "cover-image") {
      const file = e.target.files[0];
      setUpLoadCover(true);
      setBackground(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault("");
    console.log("formData", formData);
    try {
      await client
        .post("/create", formData)
        .then((response) => {
          navigate(`/calendars-manager/${response.data.data._id}`);
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CalendarContext.Provider
      value={{
        error,
        handleUploadImage,
        setUpLoadCover,
        upLoadCover,
        isInvalid,
        handleSubmit,
        handleChangedata,
        imgBackground,
        radioOptions,
        selectedColor,
        setSelectedColor,
        showColorPicker,
        setShowColorPicker,
        valueColor,
        setValueColor,
        colorPickerRef,
        calendarRef,
        isLoading,
        setIsLoading,
        background,
        setBackground,
        avatar,
        setAvatar,
        formData,
        setFormData,
        isOpen,
        onOpen,
        onClose,
        handleRadioClick,
        handleColorChange,
        handleClickOutside,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
