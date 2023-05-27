import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const AvgCosts = () => {
  return (
    <>
      <Heading fontSize={{ base: "xl" }} w={"fit-content"} fontWeight={400}>
        Average Costs
      </Heading>
      <Box mt={"10px"} mb={"30px"}>
        <Heading
          fontSize={"lg"}
          w={"fit-content"}
          fontWeight={400}
          color={"GrayText"}
        >
          ₹100 for one order (approx.)
        </Heading>
        <Text color={"GrayText"} fontSize={"12px"}>
          Exclusive of applicable taxes and charges, if any
        </Text>
      </Box>
    </>
  );
};

export default AvgCosts;
