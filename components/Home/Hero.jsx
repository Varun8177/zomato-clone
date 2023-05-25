import React from "react";
import {
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
          base: "xl",
          md: "2xl",
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
            rightIcon={<ChevronDownIcon />}
          >
            Your Location
          </MenuButton>
          <MenuList bgColor={"white"} color={"black"} mt={"7px"}>
            <MenuItem minH="48px">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/zomato-banner.webp?alt=media&token=9fe4834f-bc76-4a0a-97f2-83a210d2d4f6"
                alt="Fluffybuns the destroyer"
                width={50}
                height={50}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <span>Fluffybuns the Destroyer</span>
            </MenuItem>
            <MenuItem minH="40px">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/zomato-banner.webp?alt=media&token=9fe4834f-bc76-4a0a-97f2-83a210d2d4f6"
                alt="Simon the pensive"
                width={50}
                height={50}
              />
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
