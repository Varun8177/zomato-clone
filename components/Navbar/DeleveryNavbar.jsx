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
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const DeleveryNavbar = () => {
  const { place } = useSelector((state) => state.placeReducer);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((positions) => {
        router.push({
          query: {
            lat: positions.coords.latitude,
            lon: positions.coords.longitude,
          },
        });
        getLiveLocation(positions.coords, dispatch);
      });
    }
  };
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
              minW={"fit-content"}
            >
              <Text
                display={{ base: "none", md: "block" }}
                minW={"fit-content"}
              >
                {place || "Location"}
              </Text>
            </MenuButton>
            {place ? null : (
              <MenuList bgColor={"white"} color={"black"} mt={"7px"}>
                <MenuItem
                  w={"500px"}
                  pt={"10px"}
                  pb={"10px"}
                  closeOnSelect={false}
                >
                  <IoMdLocate color="red" size={20} />
                  <Text ml={"10px"} onClick={handleClick}>
                    Detect current Location Using GPS
                  </Text>
                </MenuItem>
              </MenuList>
            )}
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
