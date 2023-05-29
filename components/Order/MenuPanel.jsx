import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const MenuPanel = () => {
  const {
    restrauntDetails: { name },
  } = useSelector((state) => state.placeReducer);
  return (
    <Box>
      <Heading fontSize={{ base: "xl" }} w={"fit-content"} fontWeight={500}>
        {name} Menu
      </Heading>
    </Box>
  );
};

export default MenuPanel;
