import React, { useState } from "react";
import {
  Button,
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
import { BsFilter } from "react-icons/bs";
import { FilterRestaurants } from "@/redux/actions/PlacesAction";
import { useDispatch, useSelector } from "react-redux";

const FilterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { place } = useSelector((state) => state.placeReducer);
  const dispatch = useDispatch();
  const sortOpt = ["populairty", "rating", "cost"];
  const [cusine, setCuisine] = useState("");
  const [sort, setSort] = useState("");
  const popularCuisines = [
    "North Indian",
    "South Indian",
    "Bengali",
    "Punjabi",
    "Gujarati",
    "Rajasthani",
    "Maharashtrian",
    "Hyderabadi",
    "Kashmiri",
    "Goan",
    "Kerala",
    "Andhra",
    "Karnataka",
    "Assamese",
    "Bihari",
  ];
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
          <ModalBody>
            <Text as={"b"} color={"GrayText"}>
              Cuisines
            </Text>
            <Flex gap={"20px"} w={"400px"} mb={"20px"} flexWrap={"wrap"}>
              {popularCuisines?.map((item, i) => (
                <Button
                  key={item}
                  variant={"outline"}
                  cursor={"pointer"}
                  color={cusine === i ? "white" : "GrayText"}
                  onClick={() => {
                    setCuisine(i);
                  }}
                  bgColor={cusine === i ? "red.400" : "blackAlpha"}
                >
                  {item}
                </Button>
              ))}
            </Flex>
            <Text as={"b"} color={"GrayText"}>
              sort
            </Text>
            <Flex gap={"20px"} w={"400px"} mb={"20px"}>
              {sortOpt?.map((item, i) => (
                <Button
                  key={item}
                  variant={"outline"}
                  cursor={"pointer"}
                  onClick={() => {
                    setSort(i);
                  }}
                  bgColor={sort === i ? "red.400" : "blackAlpha"}
                  color={sort === i ? "white" : "GrayText"}
                >
                  {item}
                </Button>
              ))}
            </Flex>
            <Button
              bgColor={"red.400"}
              _hover={{ bgColor: "red.400" }}
              color={"white"}
              onClick={() => {
                FilterRestaurants(
                  popularCuisines[cusine],
                  dispatch,
                  place,
                  sortOpt[sort]
                );
              }}
              isDisabled={cusine === "" && sort === ""}
            >
              Apply Filters
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
