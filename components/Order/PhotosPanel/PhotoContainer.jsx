import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const PhotoContainer = () => {
  return (
    <Box
      w={"200px"}
      h={"150px"}
      rounded={"10px"}
      position={"relative"}
      objectFit={"cover"}
      overflow={"hidden"}
    >
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/birani-prop.webp?alt=media&token=a628490e-c402-483a-a61b-5ae1ccf79b31"
        }
        alt=""
        fill
      />
    </Box>
  );
};

export default PhotoContainer;
