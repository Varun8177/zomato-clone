import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Details = ({ handleStep, name, price, description, imgURL }) => {
  const { user } = useSelector((state) => state.userReducer);
  return (
    <ModalBody>
      <Box
        position={"relative"}
        w={"400px"}
        h={"250px"}
        m={"auto"}
        rounded={"10px"}
        overflow={"hidden"}
      >
        <Image src={imgURL} alt="" fill />
      </Box>
      <Heading
        fontSize={{ base: "xl" }}
        w={"fit-content"}
        fontWeight={400}
        mt={"20px"}
      >
        {name}
      </Heading>
      <Text>₹{price}</Text>
      <Text color={"GrayText"}>{description.substr(0, 200)}</Text>
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        <Button
          bgColor={"red.400"}
          color={"white"}
          mt={"10px"}
          _hover={{ bgColor: "red.500" }}
          onClick={() => {
            handleStep("address");
          }}
          isDisabled={!user}
        >
          {user ? "Order Now" : "Login/signup to order"}
        </Button>
        <IconButton
          bgColor={"white"}
          _hover={{ bgColor: "white" }}
          icon={<AiOutlineHeart color="red" size={25} />}
        />
      </Flex>
    </ModalBody>
  );
};

export default Details;
