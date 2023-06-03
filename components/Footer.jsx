import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FooterCards from "./Footer/FooterCards";
import SocialLinks from "./Footer/SocialLinks";

const Footer = () => {
  const firstBlock = [
    "Who are we",
    "Blogs",
    "Work with us",
    "Investor Relations",
    "Report Fraud",
    "Contact Us",
  ];
  const secondBlock = [
    "Who are we",
    "Blogs",
    "Work with us",
    "Investor Relations",
  ];
  const thirdBlock = ["Who are we", "Blogs"];
  const fourthBlock = ["Who are we"];
  const fifthBlock = ["privacy", "security", "terms", "sitemap"];
  return (
    <Box bgColor={"#f8f8f8"}>
      <Box w={{ base: "100%", lg: "70%" }} m={"auto"} p={"10px"}>
        <Flex
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={"30px"}
          flexWrap={"wrap"}
        >
          <Heading>zomato</Heading>
          <Flex
            alignItems={"center"}
            w={"300px"}
            justifyContent={"space-between"}
          >
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant={"outline"}
              >
                India
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant={"outline"}
              >
                English
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
        <Flex
          w={"100%"}
          alignItems={"baseline"}
          justifyContent={"space-between"}
          mt={"40px"}
          flexWrap={"wrap"}
          gap={{ base: "20px", xl: "0" }}
        >
          <FooterCards title={"ABOUT ZOMATO"} texts={firstBlock} />
          <FooterCards title={"ZOMAVERSE"} texts={secondBlock} />
          <Flex flexDir={"column"} gap={"20px"}>
            <FooterCards title={"FOR RESTAURANTS"} texts={thirdBlock} />
            <FooterCards title={"FOR ENTERPRISES"} texts={fourthBlock} />
          </Flex>

          <FooterCards title={"LEARN MORE"} texts={fifthBlock} />
          <SocialLinks />
        </Flex>
        <Divider mt={"20px"} />
        <Text
          key={"text"}
          fontWeight={400}
          fontSize={"sm"}
          color={"gray.500"}
          mt={"20px"}
          mb={"20px"}
        >
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Zomato clone™ Ltd.
          All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
