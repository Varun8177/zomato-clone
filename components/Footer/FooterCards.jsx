import React from "react";
import { Box, Text } from "@chakra-ui/react";

const FooterCards = ({ title, texts }) => {
  return (
    <Box ml={"5px"} mr={"5px"}>
      <Text fontWeight={400} fontSize={"lg"} color={"#363636"} as={"b"}>
        {title}
      </Text>
      {texts.map((text, i) => {
        return (
          <Text
            key={i}
            fontWeight={400}
            fontSize={"sm"}
            color={"gray.500"}
            mt={"10px"}
            cursor={"pointer"}
          >
            {text}
          </Text>
        );
      })}
    </Box>
  );
};

export default FooterCards;
