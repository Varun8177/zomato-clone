import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Badge = () => {
  return (
    <Flex
      alignItems={"center"}
      gap={"10px"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      p={"10px"}
      rounded={"10px"}
      w={"fit-content"}
      mt={"20px"}
      mb={"30px"}
      cursor={"pointer"}
    >
      <Flex
        alignItems={"center"}
        w={"40px"}
        h={"40px"}
        borderRadius={"50%"}
        bgColor={"lightgray"}
        objectFit={"fill"}
        overflow={"hidden"}
      >
        <Box position={"relative"} w={"20px"} h={"20px"} m={"auto"}>
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/night-life.webp?alt=media&token=e5804902-3eb1-48ea-a1ab-bd01906ab508"
            }
            alt="delivery-bike"
            fill
          />
        </Box>
      </Flex>
      <Box>
        <Text fontWeight={400} color={"GrayText"} fontSize={"13px"}>
          RESTAURANT SAFETY MEASURE
        </Text>
        <Text fontWeight={400} fontSize={"13px"}>
          Well Sanitized Kitchen
        </Text>
      </Box>
    </Flex>
  );
};

export default Badge;
