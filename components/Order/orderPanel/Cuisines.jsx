import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Cuisines = () => {
  const {
    restrauntDetails: { cuisines },
  } = useSelector((state) => state.placeReducer);
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
        {cuisines?.split(",").map((cuisine, i) => (
          <Button
            key={i}
            rounded={"30px"}
            variant={"outline"}
            colorScheme="gray"
            borderWidth={"thin"}
            fontWeight={200}
          >
            {cuisine}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default Cuisines;
