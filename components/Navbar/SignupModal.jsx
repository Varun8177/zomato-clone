import React, { useState } from "react";
import {
  Box,
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
  useToast,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { CreateUserEmail, VerifyUser } from "@/redux/actions/UserAction.js";
import { useDispatch } from "react-redux";
const SignupModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const [showSignup, setShowSignup] = useState(true);
  const dispatch = useDispatch();
  const toast = useToast();
  const CustomToast = (title, description, status) => {
    toast.closeAll();
    toast({
      title,
      description,
      status,
      position: "top-left",
    });
    setLoad(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    CreateUserEmail(
      name,
      email,
      password,
      phone,
      CustomToast,
      onClose,
      dispatch
    );
  };

  const handleGooglePopUp = () => {
    VerifyUser(dispatch);
  };

  return (
    <>
      <Text cursor={"pointer"} onClick={onOpen}>
        Sign up
      </Text>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent alignItems={"center"}>
          <ModalHeader>Sign up</ModalHeader>
          <ModalCloseButton
            _hover={{ bgColor: "white" }}
            _focus={{ boxShadow: "none" }}
            border={"none"}
          />
          <ModalBody>
            <Box as="form" onSubmit={handleFormSubmit}>
              <Input
                type="text"
                placeholder="Full Name"
                mb={"10px"}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                mb={"10px"}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="tel"
                placeholder="Phone"
                mb={"10px"}
                onChange={(e) => setPhone(e.target.value)}
                minLength={10}
                maxLength={10}
                required
              />
              <Input
                type="password"
                placeholder="set-up a password"
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
              <Checkbox mt={"10px"} required>
                <Text fontSize={"smaller"} fontWeight={400}>
                  I agree to Zomatos Terms of Service, Privacy Policy and
                  Content Policies
                </Text>
              </Checkbox>
              <Button
                mt={"20px"}
                w={"100%"}
                color={"white"}
                bgColor={"#e03546"}
                _hover={{ bgColor: "#e03546" }}
                type="submit"
                isLoading={load}
              >
                Create account
              </Button>
            </Box>
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
              onClick={handleGooglePopUp}
              mb={"20px"}
            >
              Continue with Google
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignupModal;
