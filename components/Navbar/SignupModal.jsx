import React from "react";
import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const SignupModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text cursor={"pointer"} onClick={onOpen}>
        Sign up
      </Text>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent alignItems={"center"}>
          <ModalHeader>Sign up</ModalHeader>
          <ModalCloseButton _hover={{ bgColor: "white" }} border={"none"} />
          <ModalBody>
            <Input type="text" placeholder="Full Name" mb={"10px"} />
            <Input type="text" placeholder="Email" />
            <Checkbox defaultChecked mt={"10px"}>
              <Text fontSize={"smaller"} fontWeight={400}>
                I agree to Zomatos Terms of Service, Privacy Policy and Content
                Policies
              </Text>
            </Checkbox>
            <Button
              mt={"20px"}
              w={"100%"}
              color={"white"}
              bgColor={"#e03546"}
              _hover={{ bgColor: "#e03546" }}
            >
              Create account
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
              leftIcon={<FcGoogle />}
            >
              Continue with Google
            </Button>
            <Divider mt={"30px"} mb={"30px"} />

            <Text>Already have an account? Log in</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignupModal;
