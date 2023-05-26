import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const SliderCard = ({ imgURL, title }) => {
  return (
    <Box w={"150px"} h={"200px"} textAlign={"center"} cursor={"pointer"}>
      <Box
        position={"relative"}
        borderRadius={"50%"}
        objectFit={"cover"}
        w={{
          base: "100px",
          md: "150px",
        }}
        h={{
          base: "100px",
          md: "150px",
        }}
        overflow={"hidden"}
      >
        <Image src={imgURL} alt={title} fill />
      </Box>
      <Text color={"GrayText"} fontSize={"xl"} as={"b"} fontWeight={500}>
        {title}
      </Text>
    </Box>
  );
};

export default SliderCard;
