import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import DishImageContainer from "./DishImageContainer";
import OrderModal from "./OrderModal";
const DishCard = ({ name, price, description, imgURL }) => {
  return (
    <OrderModal
      name={name}
      price={price}
      description={description}
      imgURL={imgURL}
    >
      <Flex w={"100%"} alignItems={"center"} gap={"20px"} cursor={"pointer"}>
        <DishImageContainer imgURL={imgURL} />
        <Box h={"170px"}>
          <Heading
            fontSize={{ base: "xl" }}
            w={"fit-content"}
            fontWeight={400}
            mt={"20px"}
          >
            {name}
          </Heading>
          <Text
            bgColor={"orange.300"}
            pl={"5px"}
            pr={"5px"}
            w={"fit-content"}
            rounded={"5px"}
            color={"white"}
            fontWeight={400}
            fontSize={"12px"}
            mt={"10px"}
          >
            BESTSELLER
          </Text>
          <Text>13 votes</Text>
          <Text>₹{price}</Text>
          <Text color={"GrayText"}>{`${description.substr(0, 50)}...`}</Text>
        </Box>
      </Flex>
    </OrderModal>
  );
};

export default DishCard;
