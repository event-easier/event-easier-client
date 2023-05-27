import React, { useState } from "react";
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

export default function CodeAlertDialog({
  isOpen,
  onOpen,
  onClose,
  cancelRef,
  email,
}) {
  const [verifyCode, setVerifyCode] = useState(null);
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
              onClick={() => {
                console.log("verify code:", verifyCode);
                VerifyUserByCode(email, verifyCode);
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
