import {
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdPhone } from "react-icons/md";
import EmailPassword from "./Login/EmailPassword";
import { useDispatch } from "react-redux";
import { VerifyUser } from "@/redux/actions/UserAction";
import PhoneComponent from "./Login/Phone";

const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phone, setPhone] = useState(false);
  const dispatch = useDispatch();
  const handleGooglePopUp = () => {
    VerifyUser(dispatch);
  };
  return (
    <>
      <Text cursor={"pointer"} onClick={onOpen}>
        Login
      </Text>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent alignItems={"center"}>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton
            _hover={{ bgColor: "white" }}
            _focus={{ boxShadow: "none" }}
          />
          <ModalBody>
            {phone ? <EmailPassword /> : <PhoneComponent />}
            <Flex alignItems={"center"} w={"100%"} mt={"20px"}>
              <Divider />
              <Text>OR</Text>
              <Divider />
            </Flex>
            <Button
              mt={"20px"}
              w={"100%"}
              color={"black"}
              bgColor={"white"}
              _hover={{ bgColor: "white" }}
              borderWidth={1}
              leftIcon={phone ? <MdEmail /> : <MdPhone />}
              onClick={() => setPhone(!phone)}
            >
              Continue with {!phone ? "Email & Password" : "Phone Number"}
            </Button>
            <Button
              mt={"20px"}
              w={"100%"}
              color={"black"}
              bgColor={"white"}
              _hover={{ bgColor: "white" }}
              borderWidth={1}
              leftIcon={<FcGoogle />}
              onClick={handleGooglePopUp}
              mb={"20px"}
            >
              Continue with Google
            </Button>
            {/* <Divider mt={"30px"} mb={"30px"} /> */}
          </ModalBody>
        </ModalContent>
        <EmailPassword />
      </Modal>
    </>
  );
};

export default LoginModal;
