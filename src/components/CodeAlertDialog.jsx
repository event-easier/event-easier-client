import React, { useContext, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  PinInput,
  PinInputField,
  HStack,
} from "@chakra-ui/react";
import { VerifyUserByCode } from "../services/firebase/authentication";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

export default function CodeAlertDialog({
  isOpen,
  onOpen,
  onClose,
  cancelRef,
  email,
}) {
  const { setProfileData } = useContext(AuthContext);
  const [verifyCode, setVerifyCode] = useState(null);

  const navigate = useNavigate();
  return (
    <div>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Check your email!</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            We sent a Events Easier sign in code to your email. If it doesn't
            exist in your inbox, please check your spam.
            <HStack mt="20px" mb="10px">
              <PinInput
                size="lg"
                onComplete={(value) => {
                  console.log("final: ", value);
                  setVerifyCode(value);
                }}
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="green"
              ml={3}
              onClick={async () => {
                console.log("verify code:", verifyCode);
                const res = await VerifyUserByCode(email, verifyCode);
                !res
                  ?
                  console.log("Something is wrong.")
                  :
                  setProfileData(res);
                localStorage.setItem("profile-data", JSON.stringify(res));
                navigate("/home")
              }}
            >
              Verify
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
