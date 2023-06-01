import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ page, handlePage, data }) => {
  return (
    <Box m={"auto"} w={"fit-content"} mt={"50px"}>
      <Button
        isDisabled={page <= 1}
        onClick={() => handlePage(-1)}
        mr={"20px"}
        bgColor={"red.400"}
        color={"white"}
        _hover={{ bgColor: "red.500" }}
      >
        Prev
      </Button>
      <Button isDisabled>{page}</Button>
      <Button
        onClick={() => handlePage(1)}
        ml={"20px"}
        bgColor={"red.400"}
        color={"white"}
        isDisabled={data.length < 18}
        _hover={{ bgColor: "red.500" }}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
