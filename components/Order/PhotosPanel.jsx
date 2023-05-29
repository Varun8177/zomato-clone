import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import PhotoContainer from "./PhotosPanel/PhotoContainer";
import { useSelector } from "react-redux";

const PhotosPanel = () => {
  const {
    restrauntDetails: { photos, name },
  } = useSelector((state) => state.placeReducer);
  return (
    <Box>
      <Heading fontSize={{ base: "xl" }} w={"fit-content"} fontWeight={500}>
        {name} Photos
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
          All({photos?.length})
        </Button>
        <Button
          _hover={{ bg: "red.400", border: 0, color: "white" }}
          variant={"outline"}
          colorScheme="red"
          w={"fit-content"}
          fontWeight={400}
          color={"GrayText"}
        >
          Food({photos?.length})
        </Button>
      </Flex>
      <Flex
        w={"100%"}
        mt={"20px"}
        gap={"10px"}
        alignItems={"center"}
        mb={"30px"}
        flexWrap={"wrap"}
      >
        {photos?.map((photo, i) => {
          return <PhotoContainer key={i} imgURL={photo.photo.thumb_url} />;
        })}
      </Flex>
    </Box>
  );
};

export default PhotosPanel;
