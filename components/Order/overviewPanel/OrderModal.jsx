import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
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
import { useDispatch } from "react-redux";
import DishImageContainer from "./DishImageContainer";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import Details from "./Details";
import Address from "./Address";

const OrderModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState("details");
  const dispatch = useDispatch();
  const handleStep = (val) => {
    setStep(val);
  };
  return (
    <>
      <Box cursor={"pointer"} onClick={onOpen}>
        {children}
      </Box>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent alignItems={"center"}>
          <ModalHeader>
            {step === "details" ? "Product Info" : "select Address"}
          </ModalHeader>
          <ModalCloseButton
            _hover={{ bgColor: "white" }}
            _focus={{ boxShadow: "none" }}
          />
          {step === "details" ? (
            <Details handleStep={handleStep} />
          ) : (
            <Address handleStep={handleStep} />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrderModal;
