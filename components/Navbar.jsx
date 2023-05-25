import { Box, Flex, Show, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import LoginModal from "./Navbar/LoginModal";
import SignupModal from "./Navbar/SignupModal";

const Navbar = () => {
  return (
    <Flex alignItems={"center"} h={"50px"} bg={"transparent"} color={"white"}>
      <Flex
        w={{
          base: "90%",
          lg: "80%",
        }}
        alignItems={"center"}
        justifyContent={"space-between"}
        m={"auto"}
      >
        <Text as={"b"} cursor={"pointer"}>
          Get the app
        </Text>
        <Show above="md">
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            w={{
              base: "70%",
              lg: "50%",
            }}
          >
            <Text cursor={"pointer"}>Investor Relations</Text>
            <Text cursor={"pointer"}>Add Restraunts</Text>
            <LoginModal />
            <SignupModal />
          </Flex>
        </Show>
      </Flex>
    </Flex>
  );
};

export default Navbar;
