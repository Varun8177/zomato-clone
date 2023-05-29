import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import DishImageContainer from "./DishImageContainer";

const DishCard = () => {
  return (
    <Flex w={"100%"} alignItems={"center"} gap={"20px"} cursor={"pointer"}>
      <DishImageContainer
        imgURL={
          "https://b.zmtcdn.com/data/pictures/3/50123/4c6fac32161308db080e09270cd03fcd_featured_v2.jpg"
        }
      />
      <Box h={"170px"}>
        <Heading
          fontSize={{ base: "xl" }}
          w={"fit-content"}
          fontWeight={400}
          mt={"20px"}
        >
          Chocolate Hazelnut and Almonds Cup Ice Cream [100 ml]
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
        <Text>₹60</Text>
        <Text color={"GrayText"}>
          Sinfully indulge with zero guilt with our no added sugar rich creamy
          ice
        </Text>
      </Box>
    </Flex>
  );
};

export default DishCard;
