import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FcOk } from "react-icons/fc";
import Advertisement from "./orderPanel/Advertisement";
import MoreInfo from "./orderPanel/MoreInfo";
import Cuisines from "./orderPanel/Cuisines";
import Badge from "./orderPanel/Badge";
import AvgCosts from "./orderPanel/AvgCosts";

const OverviewPanel = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      gap={"10px"}
      flexDir={{ base: "column", xl: "row" }}
    >
      <Box w={{ base: "100%", xl: "65%" }}>
        <Heading fontSize={{ base: "xl" }} w={"fit-content"} fontWeight={500}>
          About this Place
        </Heading>
        <Badge />
        <Cuisines />
        <AvgCosts />
        <MoreInfo />
        <Advertisement />
      </Box>
      <Box
        w={{ base: "100%", xl: "30%" }}
        h={"500px"}
        border={"1px solid"}
      ></Box>
    </Flex>
  );
};

export default OverviewPanel;
