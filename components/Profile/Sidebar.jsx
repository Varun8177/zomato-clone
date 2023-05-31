import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = ({ options, heading, active, handleTab }) => {
  const router = useRouter();
  return (
    <Stack
      w={"350px"}
      border={"2px solid #f8f8f8"}
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
            borderLeft={item.id === active ? "5px solid #ef4f5f" : ""}
            color={item.id === active ? "red.300" : "black"}
            bgGradient={
              item.id === active ? "linear(to-l, #ffdde1, #ffedef)" : ""
            }
            onClick={() => {
              router.push({ query: { t: item.id } });
              handleTab(item.id);
            }}
          >
            {item.name}
          </Text>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
