import { Box, Text } from "@chakra-ui/react";
import React from "react";

const CollectionCards = () => {
  return (
    <Box
      cursor={"pointer"}
      minW={"200px"}
      m={{
        base: "auto",
        lg: "0",
      }}
      bgImage={
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/zomato-banner.webp?alt=media&token=9fe4834f-bc76-4a0a-97f2-83a210d2d4f6"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      h={"300px"}
      w={"250px"}
      borderRadius={"5px"}
      color={"white"}
      position={"relative"}
    >
      <Text as={"b"} position={"absolute"} bottom={8} left={"3"}>
        On the outskirts
      </Text>
      <Text position={"absolute"} bottom={2} left={"3"}>
        24 places
      </Text>
    </Box>
  );
};

export default CollectionCards;
