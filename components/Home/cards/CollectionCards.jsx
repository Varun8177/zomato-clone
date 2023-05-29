import { Box, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const CollectionCards = ({ imgURL, title }) => {
  const { place } = useSelector((state) => state.placeReducer);
  const router = useRouter();
  const toast = useToast();
  return (
    <Box
      cursor={"pointer"}
      minW={"200px"}
      m={{
        base: "auto",
        lg: "0",
      }}
      bgImage={imgURL}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      h={"300px"}
      w={"250px"}
      borderRadius={"5px"}
      color={"white"}
      position={"relative"}
      onClick={() => {
        if (place) {
          router.push(`/${place}/dine-out`);
        } else {
          toast.closeAll();
          toast({
            title: "Please select a location to proceed",
            status: "warning",
            position: "top",
          });
        }
      }}
    >
      <Text as={"b"} position={"absolute"} bottom={8} left={"3"}>
        {title}
      </Text>
      <Text position={"absolute"} bottom={2} left={"3"}>
        24 places
      </Text>
    </Box>
  );
};

export default CollectionCards;
