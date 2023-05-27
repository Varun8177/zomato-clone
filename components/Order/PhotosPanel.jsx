import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import PhotoContainer from "./PhotosPanel/PhotoContainer";

const PhotosPanel = () => {
  return (
    <Box>
      <Heading fontSize={{ base: "xl" }} w={"fit-content"} fontWeight={500}>
        Behrouz Biryani Photos
      </Heading>
      <Flex
        w={"100%"}
        mt={"20px"}
        gap={"10px"}
        alignItems={"center"}
        mb={"30px"}
      >
        <Button
          w={"fit-content"}
          fontWeight={400}
          color={"white"}
          bg={"red.400"}
          _hover={{ bg: "red.500", border: 0, color: "white" }}
        >
          All(1)
        </Button>
        <Button
          _hover={{ bg: "red.400", border: 0, color: "white" }}
          variant={"outline"}
          colorScheme="red"
          w={"fit-content"}
          fontWeight={400}
          color={"GrayText"}
        >
          Food (1)
        </Button>
      </Flex>
      <PhotoContainer />
    </Box>
  );
};

export default PhotosPanel;
