import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Sidebar = ({ options, heading, active }) => {
  return (
    <Stack
      w={"350px"}
      border={"1px solid #f8f8f8"}
      borderRadius={"5px"}
      mb={"20px"}
    >
      <Text
        as={"b"}
        fontWeight={400}
        fontSize={"lg"}
        color={"GrayText"}
        w={"200px"}
        p={"10px"}
      >
        {heading}
      </Text>
      {options.map((item, i) => {
        return (
          <Text
            p={"10px"}
            as={"b"}
            fontWeight={400}
            fontSize={"lg"}
            key={i}
            w={"100%"}
            cursor={"pointer"}
            borderLeft={i === active ? "5px solid #ef4f5f" : ""}
            color={i === active ? "red.300" : "black"}
            bgGradient={i === active ? "linear(to-l, #ffdde1, #ffedef)" : ""}
          >
            {item}
          </Text>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
