import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useDisclosure,
  useSteps,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
const steps = [
  { title: "Dispatched", description: "" },
  {
    title: "On the way",
    description: "the item is on its way to your selected address",
  },
  {
    title: "Delivered",
    description: "the item has been successfuly delivered",
  },
];
const OrderModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active, setActive] = useState(0);

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <>
      <Box onClick={onOpen}>{children}</Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent>
          <ModalHeader>Order Progress</ModalHeader>
          <ModalCloseButton />
          <ModalBody alignItems={"center"}>
            <Stepper
              index={activeStep}
              orientation="vertical"
              height="400px"
              gap="0"
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink="0">
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrderModal;
