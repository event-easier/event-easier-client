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
  const navigate = useNavigate()
  const handleNameInput = (e) => {
    setUserSignUp({
      ...userSignUp,
      name: e.target.value,
      email: email
    })
    console.log(userSignUp)
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
              // setProfileData(res.data.data);
              // localStorage.setItem(
              //   "profile-data",
              //   JSON.stringify({
              //     ...res.data.data,
              //     token: res.data.token,
              //   })
              // );
              // navigate("/home")
            }}
          >
            Continue
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
