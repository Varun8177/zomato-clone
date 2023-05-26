import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Image from "next/image";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { IoMdLocate } from "react-icons/io";

const Hero = () => {
  return (
    <Flex
      flexDir={"column"}
      h={"70%"}
      alignItems={"center"}
      justify={"center"}
      color={"white"}
    >
      <Heading fontSize={"7xl"}>zomato</Heading>
      <Heading
        fontWeight={"200"}
        mt={"2%"}
        fontSize={{
          base: "md",
          sm: "lg",
          lg: "2xl",
        }}
      >
        Discover the best food & drinks in Nagpur
      </Heading>
      <Flex
        w={{
          base: "90%",
          lg: "50%",
        }}
        mt={"2%"}
        p={2}
        bgColor={"white"}
        borderRadius={10}
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
          >
            <Flex alignItems={"center"} gap={"10px"}>
              <IoMdLocate />
              Location
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
            <MenuItem minH="40px">
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
              <span>Simon the pensive</span>
            </MenuItem>
          </MenuList>
        </Menu>
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
    </Flex>
  );
};

export default Hero;
