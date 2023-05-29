import { VscListFilter } from "react-icons/vsc";
import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ReviewCard from "./reviewPanel/ReviewCard";
import { useSelector } from "react-redux";

const ReviewsPanel = () => {
  const {
    restrauntDetails: { all_reviews, name },
  } = useSelector((state) => state.placeReducer);
  return (
    <Box>
      <Heading fontSize={{ base: "xl" }} w={"fit-content"} fontWeight={500}>
        {name} Reviews
      </Heading>
      <Flex
        w={"100%"}
        mt={"20px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={"30px"}
      >
        <Text
          fontSize={"lg"}
          w={"fit-content"}
          fontWeight={400}
          color={"GrayText"}
        >
          All Reviews
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<VscListFilter />}
            rightIcon={<ChevronDownIcon />}
            bg={"white"}
            _hover={{ bg: "white" }}
            _active={{ bg: "white" }}
          >
            Newest First
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {all_reviews?.reviews?.map((review, i) => {
        return <ReviewCard key={i} />;
      })}
    </Box>
  );
};

export default ReviewsPanel;
