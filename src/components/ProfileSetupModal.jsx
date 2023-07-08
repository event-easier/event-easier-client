import React, { useState, useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast
} from "@chakra-ui/react";
import { RegisterByEmail } from "../services/firebase/authentication";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router";

export default function ProfileSetup({ isOpen, onOpen, onClose, email }) {
  const { setProfileData } = useContext(AuthContext);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    type: "normal",
    email: email,
    avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  })
  const toast = useToast()

  const navigate = useNavigate()
  const handleNameInput = (e) => {
    setUserSignUp({
      ...userSignUp,
      name: e.target.value,
      email: email
    })
  }
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input ref={initialRef} placeholder="name"
              onChange={handleNameInput}
            />
          </FormControl>
          {/* <FormControl mt={4} isRequired>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last name" />
          </FormControl> */}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3}
            onClick={async () => {
              console.log("register: ");
              const res = await RegisterByEmail(userSignUp);
              if (typeof res === "string" && res.slice(0, 29) == "User already exists with this") {
                toast({
                  title: "User already exists with this email.",
                  status: "error",
                  isClosable: true
                })
              } else {
                toast({
                  title: "Your account has been created, please sign in again to use our services.",
                  variant: "subtle",
                  status: "success",
                  isClosable: true
                })
                // setProfileData(res.data.data);
                // localStorage.setItem(
                //   "profile-data",
                //   JSON.stringify({
                //     ...res.data.data,
                //     token: res.data.token,
                //   })
                // );
                navigate("/signin")
              }
            }
            }
          >
            Continue
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
