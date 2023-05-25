import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const OptionCards = () => {
  return (
    <Box
      h={"100%"}
      w={"30%"}
      minW={"200px"}
      overflow={"hidden"}
      borderRadius={"10px"}
      border={"1px solid #e8e8e8"}
      cursor={"pointer"}
      m={"auto"}
    >
      <Box position={"relative"} h={"150px"} w={"100%"}>
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/order-online.webp?alt=media&token=c452919b-f46f-4533-87d2-a07f814c3ecf"
          }
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box mt={"5px"} ml={"10px"}>
        <Text as={"b"}>Order Online</Text>
        <Text color={"gray.500"}>Stay home and order to your doorstep</Text>
      </Box>
    </Box>
  );
};

export default OptionCards;
