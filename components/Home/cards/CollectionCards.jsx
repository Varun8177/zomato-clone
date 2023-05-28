import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CollectionCards = () => {
  const { place } = useSelector((state) => state.placeReducer);
  return (
    <Link href={`/${place || "India"}/dine-out`}>
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
    </Link>
  );
};

export default CollectionCards;
