import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";

const IconText = ({ icon, color, reviews, title, rating }) => {
  return (
    <Flex alignItems={"center"} gap={"5px"}>
      <Flex bgColor={color} rounded={"5px"} alignItems={"center"}>
        <Text color={"white"} ml={rating ? "5px" : 0}>
          {rating}
        </Text>
        <IconButton
          bgColor={color}
          fontSize={"13px"}
          rounded={"5px"}
          h={"30px"}
          pr={"5px"}
          pl={"5px"}
          fontWeight={"bold"}
          icon={icon}
        />
      </Flex>
      <Box>
        <Text>{reviews}</Text>
        <Text borderBottom={"1px dashed"} color={"GrayText"} fontSize={"12px"}>
          {title}
        </Text>
      </Box>
    </Flex>
  );
};

export default IconText;
