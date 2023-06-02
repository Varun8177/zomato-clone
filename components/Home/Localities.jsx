import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import LocalityCards from "./cards/LocalityCards";
import { useSelector } from "react-redux";

const Localities = () => {
  const { place } = useSelector((state) => state.placeReducer);
  return (
    <Box w={{ base: "100%", lg: "70%" }} m={"auto"} mt={"50px"} mb={"20px"}>
      {place && (
        <>
          {" "}
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            m={{ base: "auto", lg: "0" }}
            w={"fit-content"}
            fontWeight={500}
          >
            Popular localities in and around
          </Heading>
          <Flex
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={"10px"}
            mt={"20px"}
          >
            <LocalityCards />
          </Flex>
        </>
      )}
    </Box>
  );
};

export default Localities;
