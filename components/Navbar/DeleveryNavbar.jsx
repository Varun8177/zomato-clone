import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Hide,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { IoMdLocate } from "react-icons/io";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Link from "next/link";

const DeleveryNavbar = () => {
  return (
    <Flex alignItems={"center"} color={"black"} pt={"10px"} pb={"5px"}>
      <Flex
        w={{
          base: "90%",
          lg: "70%",
        }}
        alignItems={"center"}
        justifyContent={"space-between"}
        m={"auto"}
      >
        <Hide above="md">
          <HamburgerIcon />
        </Hide>
        <Hide below="md">
          <Link href={"/"}>
            <Heading>zomato</Heading>
          </Link>
        </Hide>
        <Flex
          w={{
            base: "80%",
            lg: "50%",
          }}
          p={2}
          bgColor={"white"}
          borderRadius={10}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        >
          <Menu>
            <MenuButton
              as={Button}
              bgColor={"white"}
              color={"black"}
              w={"40%"}
              borderRightRadius={"0"}
              _hover={{ bgColor: "white" }}
              _focus={{ bgColor: "white" }}
              _active={{ bgColor: "white" }}
              rightIcon={<ChevronDownIcon />}
              leftIcon={<IoMdLocate />}
            >
              <Flex alignItems={"center"}>
                <Text display={{ base: "none", md: "block" }}>Location</Text>
              </Flex>
            </MenuButton>
            <MenuList bgColor={"white"} color={"black"} mt={"7px"}>
              <MenuItem minH="48px">
                <Box
                  position={"relative"}
                  w={"30px"}
                  h={"30px"}
                  borderRadius={"50%"}
                  objectFit={"cover"}
                  border={"1px solid"}
                  overflow={"hidden"}
                >
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/zomato-banner.webp?alt=media&token=9fe4834f-bc76-4a0a-97f2-83a210d2d4f6"
                    alt="Fluffybuns the destroyer"
                    fill
                  />
                </Box>
                <span>Fluffybuns the Destroyer</span>
              </MenuItem>
            </MenuList>
          </Menu>
          <Divider orientation="vertical" p={"2"} h={"20px"} />

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              {<SearchIcon color="gray.300" />}
            </InputLeftElement>
            <Input
              borderLeftRadius={"0"}
              variant={"filled"}
              type="tel"
              placeholder="search for restaurant, cuisine or a dish"
              bgColor={"white"}
              _hover={{ bgColor: "white" }}
              _focus={{ bgColor: "white" }}
              border={"none"}
              color={"black"}
            />
          </InputGroup>
        </Flex>
        <Show above="lg">
          <LoginModal />
          <SignupModal />
        </Show>
      </Flex>
    </Flex>
  );
};

export default DeleveryNavbar;
