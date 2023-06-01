import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Details from "./Details";
import Address from "./Address";
import AddressForm from "./AddressForm";
import OrderConfirm from "./OrderConfirm";
import Success from "./Success";

const OrderModal = ({ children, name, price, description, imgURL }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState("details");
  const [add, setAdd] = useState({});
  const handleStep = (val) => {
    setStep(val);
  };
  const handleAddress = (val) => {
    setAdd(val);
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
            <Details
              handleStep={handleStep}
              name={name}
              price={price}
              description={description}
              imgURL={imgURL}
            />
          ) : step === "address" ? (
            <Address handleStep={handleStep} handleAddress={handleAddress} />
          ) : step === "form" ? (
            <AddressForm handleStep={handleStep} />
          ) : step === "confirm" ? (
            <OrderConfirm
              handleStep={handleStep}
              add={add}
              name={name}
              price={price}
              description={description}
              imgURL={imgURL}
            />
          ) : step === "success" ? (
            <Success />
          ) : null}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrderModal;
