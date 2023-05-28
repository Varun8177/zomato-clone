import { Box, Flex, Heading, Tab } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const TabCards = ({ imgURL, title, section }) => {
  const { place } = useSelector((state) => state.placeReducer);
  return (
    <Link href={`/${place}/${section}`}>
      <Tab _selected={{ color: "red" }} color={"GrayText"}>
        <Flex alignItems={"center"} gap={"10px"}>
          <Flex
            alignItems={"center"}
            w={"60px"}
            h={"60px"}
            borderRadius={"50%"}
            bgColor={"lightgray"}
            objectFit={"fill"}
            overflow={"hidden"}
          >
            <Box position={"relative"} w={"30px"} h={"30px"} m={"auto"}>
              <Image src={imgURL} alt="delivery-bike" fill />
            </Box>
          </Flex>
          <Heading
            fontSize={{ base: "2xl" }}
            m={{ base: "auto", lg: "0" }}
            w={"fit-content"}
            fontWeight={400}
          >
            {title}
          </Heading>
        </Flex>
      </Tab>
    </Link>
  );
};

export default TabCards;
