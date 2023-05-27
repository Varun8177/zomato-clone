import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FcOk } from "react-icons/fc";

const MoreInfo = () => {
  return (
    <>
      <Heading fontSize={{ base: "xl" }} w={"fit-content"} fontWeight={400}>
        More Info
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        mt={"20px"}
        mb={"30px"}
      >
        {new Array(4).fill(0).map((_, i) => (
          <Flex key={i} alignItems={"center"} gap={"5px"}>
            <FcOk />
            <Text color={"GrayText"}>Home Delivery</Text>
          </Flex>
        ))}
      </Grid>
    </>
  );
};

export default MoreInfo;
