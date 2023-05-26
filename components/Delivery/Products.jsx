import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ProductCards from "./cards/ProductCards";

const Products = ({ title }) => {
  return (
    <Box bg={"#ffff"} pt={10} mt={"10px"} pb={10}>
      <Box w={{ base: "90%", lg: "70%" }} m={"auto"}>
        <Heading fontWeight={"400"} fontSize={"3xl"} mb={"20px"}>
          {title}
        </Heading>
        <Flex
          w={"100%"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          gap={"20px"}
        >
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
        </Flex>
      </Box>
    </Box>
  );
};

export default Products;
