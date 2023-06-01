import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const EmptyContainer = ({ imgURL, heading }) => {
  return (
    <Box w={"100%"} mt={"20px"}>
      <Image
        src={imgURL}
        width={300}
        height={300}
        alt=""
        style={{ margin: "auto", objectFit: "contain" }}
      />
      <Text p={"10px"} fontWeight={400} fontSize={"lg"} textAlign={"center"}>
        Nothing to show here
      </Text>
    </Box>
  );
};

export default EmptyContainer;
