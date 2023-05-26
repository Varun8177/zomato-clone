import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CollectionCards from "./cards/CollectionCards";

const Collections = () => {
  return (
    <Box w={{ base: "100%", lg: "70%" }} m={"auto"} mt={"20px"}>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        m={{ base: "auto", lg: "0" }}
        w={"fit-content"}
        fontWeight={500}
      >
        Collections
      </Heading>
      <Text color={"gray.500"}>
        Explore curated lists of top restaurants, cafes, pubs, and bars in
        Nagpur, based on trends
      </Text>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={"10px"}
        mt={"20px"}
      >
        <CollectionCards />
        <CollectionCards />
        <CollectionCards />
        <CollectionCards />
      </Flex>
    </Box>
  );
};

export default Collections;
