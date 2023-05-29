import { Box, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import DishCard from "./overviewPanel/DishCard";

const OnlineOrderPanel = () => {
  return (
    <Box>
      <Flex w={"100%"} flexWrap={"wrap"} gap={"20px"} mb={"10px"}>
        {new Array(5).fill(0).map((_, i) => {
          return (
            <Box
              key={i}
              bg={"blue.600"}
              color={"white"}
              pl={"10px"}
              pr={"10px"}
              w={"fit-content"}
            >
              <Text fontSize={"15px"} as={"b"}>
                50% OFF up to ₹100
              </Text>
              <Text fontSize={"12px"}>use code WELCOME50</Text>
            </Box>
          );
        })}
      </Flex>
      <Checkbox fontSize={"15px"} color={"GrayText"}>
        Veg Only
      </Checkbox>
      <Heading
        fontSize={{ base: "2xl" }}
        w={"fit-content"}
        fontWeight={400}
        mt={"20px"}
        mb={"20px"}
      >
        Recommended
      </Heading>
      {new Array(5).fill(0).map((item, i) => {
        return <DishCard key={i} />;
      })}
    </Box>
  );
};

export default OnlineOrderPanel;
