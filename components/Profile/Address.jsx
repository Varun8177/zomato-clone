import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import EmptyContainer from "./EmptyContainer";
import { useSelector } from "react-redux";

const Address = () => {
  const { user } = useSelector((store) => store.userReducer);
  return (
    <Flex
      w={"100%"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      gap={"20px"}
      h={"fit-content"}
      mt={"30px"}
    >
      {user?.address?.length <= 0 ? (
        <EmptyContainer
          imgURL={
            "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/empty%2Fenpty-address.webp?alt=media&token=eb4fde45-a456-4d04-9533-6ac6f1f3e7f0"
          }
        />
      ) : (
        user?.address?.map((item, i) => (
          <Box key={i}>
            <Stack w={"320px"} alignItems={"center"}>
              <Box
                border={"2px solid #e8e8e8"}
                w={"100%"}
                p={"10px"}
                rounded={"10px"}
                fontSize={"12px"}
                cursor={"pointer"}
                bgColor={"red.200"}
              >
                <Text as={"b"}>{item.name}</Text>
                <Text>{item.mobile}</Text>
                <Text>{item.address}</Text>
                <Text>{item.zip}</Text>
              </Box>
            </Stack>
          </Box>
        ))
      )}
    </Flex>
  );
};

export default Address;
