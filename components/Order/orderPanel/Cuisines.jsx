import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Cuisines = () => {
  return (
    <Box w={"100%"}>
      <Heading fontSize={{ base: "xl" }} w={"fit-content"} fontWeight={400}>
        Cuisines
      </Heading>
      <Flex
        gap={"10px"}
        mt={"20px"}
        mb={"20px"}
        w={{ base: "100%", lg: "80%" }}
        flexWrap={"wrap"}
      >
        {new Array(5).fill(0).map((_, i) => (
          <Button
            key={i}
            rounded={"30px"}
            variant={"outline"}
            colorScheme="gray"
            borderWidth={"thin"}
            fontWeight={200}
          >
            Fast Food
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default Cuisines;
