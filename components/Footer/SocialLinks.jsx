import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const SocialLinks = () => {
  return (
    <Box>
      <Text fontWeight={400} fontSize={"lg"} color={"#363636"} as={"b"}>
        SOCIAL LINKS
      </Text>
      <Flex gap={"10px"} mb={"10px"}>
        {new Array(4).fill(0).map((link, i) => (
          <IconButton
            key={i}
            borderRadius={"50%"}
            bgColor={"black"}
            _hover={{ bgColor: "black" }}
          />
        ))}
      </Flex>
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/zomato-play-btn.webp?alt=media&token=b68389e0-e0c9-4a67-9338-64238419dd47"
        }
        alt=""
        width={140}
        height={100}
        style={{ marginBottom: "10px" }}
      />
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/zomato-store-btn.webp?alt=media&token=8a57b427-91e3-47e9-87bf-7b91f03b0a4f"
        }
        alt=""
        width={140}
        height={100}
      />
    </Box>
  );
};

export default SocialLinks;
