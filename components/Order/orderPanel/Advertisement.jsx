import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Advertisement = () => {
  return (
    <Box bg={"gray.100"} p={"10px"} rounded={"5px"}>
      <Heading fontSize={{ base: "2xl" }} w={"fit-content"} fontWeight={"400"}>
        Are you a food blogger?
      </Heading>
      <Text color={"GrayText"}>Add a Zomato spoonback to your blog.</Text>
    </Box>
  );
};

export default Advertisement;
