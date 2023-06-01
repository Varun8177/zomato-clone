import { Box, Checkbox, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import DishCard from "./overviewPanel/DishCard";
import { useSelector } from "react-redux";

const OnlineOrderPanel = () => {
  const { meals } = useSelector((state) => state.placeReducer);
  return (
    <Box>
      <Flex w={"100%"} flexWrap={"wrap"} gap={"20px"} mb={"10px"}>
        {new Array(5).fill(0).map((_, i) => {
          return (
            <Box
              key={i}
              bg={"blue.600"}
              color={"white"}
              pl={"10px"}
              pr={"10px"}
              w={"fit-content"}
            >
              <Text fontSize={"15px"} as={"b"}>
                50% OFF up to ₹100
              </Text>
              <Text fontSize={"12px"}>use code WELCOME50</Text>
            </Box>
          );
        })}
      </Flex>
      <Stack
        spacing={[5, 5]}
        direction={["column", "row"]}
        flexWrap={"wrap"}
        gap="40px"
      >
        {meals?.map((item, i) => (
          <Checkbox key={i} fontSize={"15px"} color={"GrayText"}>
            {item.strCategory}
          </Checkbox>
        ))}
      </Stack>

      <Heading
        fontSize={{ base: "2xl" }}
        w={"fit-content"}
        fontWeight={400}
        mt={"20px"}
        mb={"20px"}
      >
        Recommended
      </Heading>
      {meals?.map((item, i) => {
        return (
          <DishCard
            description={item.strCategoryDescription}
            imgURL={item.strCategoryThumb}
            key={i}
            name={item.strCategory}
            price={Math.random().toString().substr(2, 2)}
          />
        );
      })}
    </Box>
  );
};

export default OnlineOrderPanel;
