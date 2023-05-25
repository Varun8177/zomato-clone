import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const LocalityCards = () => {
  return (
    <Flex
      width={"320px"}
      borderWidth={1}
      mt={"20px"}
      p={"10px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderRadius={"5px"}
    >
      <Box>
        <Text as={"b"} fontWeight={400} fontSize={"2xl"} color={"#363636"}>
          Dharampeth
        </Text>
        <Text color={"gray.500"}>146 places</Text>
      </Box>
      <ChevronRightIcon />
    </Flex>
  );
};

export default LocalityCards;
