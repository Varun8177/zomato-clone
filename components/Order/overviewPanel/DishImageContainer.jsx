import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const DishImageContainer = ({ imgURL }) => {
  return (
    <Box
      w={"180px"}
      h={"130px"}
      rounded={"10px"}
      position={"relative"}
      objectFit={"contain"}
      overflow={"hidden"}
      cursor={"pointer"}
    >
      <Image src={imgURL} alt="" fill />
    </Box>
  );
};

export default DishImageContainer;
