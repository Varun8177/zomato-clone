import {
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text cursor={"pointer"} onClick={onOpen}>
        Login
      </Text>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent alignItems={"center"}>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton _hover={{ bgColor: "white" }} />
          <ModalBody>
            <InputGroup>
              <InputLeftAddon children="+91" />
              <Input type="tel" placeholder="phone number" />
            </InputGroup>
            <Button
              mt={"20px"}
              w={"100%"}
              color={"white"}
              bgColor={"#e03546"}
              _hover={{ bgColor: "#e03546" }}
            >
              Send One Time Password
            </Button>
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
            >
              Continue with Email
            </Button>
            <Button
              mt={"20px"}
              w={"100%"}
              color={"black"}
              bgColor={"white"}
              _hover={{ bgColor: "white" }}
              borderWidth={1}
            >
              Continue with Google
            </Button>
            <Divider mt={"30px"} mb={"30px"} />

            <Text>New to Zomato? Create account</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
