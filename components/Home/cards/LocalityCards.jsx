import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const LocalityCards = () => {
  const { place } = useSelector((state) => state.placeReducer);
  const router = useRouter();
  return (
    <Flex
      cursor={"pointer"}
      m={{
        base: "auto",
        lg: "0",
      }}
      width={"320px"}
      borderWidth={1}
      mt={"20px"}
      p={"10px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderRadius={"5px"}
      onClick={() => router.push(`/${place}/delivery`)}
    >
      <Box>
        <Text as={"b"} fontWeight={400} fontSize={"2xl"} color={"#363636"}>
          {place}
        </Text>
        <Text color={"gray.500"}>146 places</Text>
      </Box>
      <ChevronRightIcon />
    </Flex>
  );
};

export default LocalityCards;
