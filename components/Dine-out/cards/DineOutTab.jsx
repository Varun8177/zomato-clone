import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import FilterModal from "@/components/Delivery/modals/FilterModal";
const DineOutTab = () => {
  return (
    <Flex
      w={{ base: "100%", md: "70%" }}
      alignItems={"center"}
      m={"auto"}
      mb={"20px"}
      gap={"10px"}
      flexWrap={"wrap"}
      mt={"20px"}
    >
      <FilterModal />
      <Button variant={"outline"} cursor={"pointer"} color={"GrayText"}>
        Rating: 4.0+
      </Button>
      <Button variant={"outline"} cursor={"pointer"} color={"GrayText"}>
        Outdoor Seating
      </Button>
      <Button variant={"outline"} cursor={"pointer"} color={"GrayText"}>
        Serves Alcohol
      </Button>
      <Button variant={"outline"} cursor={"pointer"} color={"GrayText"}>
        Open Now
      </Button>
    </Flex>
  );
};

export default DineOutTab;
