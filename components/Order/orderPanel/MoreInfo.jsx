import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FcOk } from "react-icons/fc";
import { useSelector } from "react-redux";

const MoreInfo = () => {
  const {
    restrauntDetails: { highlights },
  } = useSelector((state) => state.placeReducer);
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
        {highlights?.map((highlight, i) => (
          <Flex key={i} alignItems={"center"} gap={"5px"}>
            <FcOk />
            <Text color={"GrayText"}>{highlight}</Text>
          </Flex>
        ))}
      </Grid>
    </>
  );
};

export default MoreInfo;
