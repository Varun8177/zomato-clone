import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

const FilterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant={"outline"}
        cursor={"pointer"}
        onClick={onOpen}
        leftIcon={<BsFilter />}
        color={"GrayText"}
      >
        Filter
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent alignItems={"center"}>
          <ModalHeader>Filter</ModalHeader>
          <ModalCloseButton _hover={{ bgColor: "white" }} />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
