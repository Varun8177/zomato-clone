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

const Details = ({ handleStep }) => {
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
        <Image
          src={
            "https://b.zmtcdn.com/data/pictures/3/50123/4c6fac32161308db080e09270cd03fcd_featured_v2.jpg"
          }
          alt=""
          fill
        />
      </Box>
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
        Sinfully indulge with zero guilt with our no added sugar rich creamy ice
      </Text>
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        <Button
          bgColor={"red.400"}
          color={"white"}
          mt={"10px"}
          _hover={{ bgColor: "red.500" }}
          onClick={() => {
            handleStep("address");
          }}
        >
          Order Now
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
