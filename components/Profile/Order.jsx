import React from "react";
import { useSelector } from "react-redux";
import EmptyContainer from "./EmptyContainer";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Order = () => {
  const { user } = useSelector((store) => store.userReducer);
  return (
    <Flex
      w={"100%"}
      flexWrap={"wrap"}
      justifyContent={"left"}
      gap={"20px"}
      h={"fit-content"}
      mt={"30px"}
    >
      {user?.orders?.length <= 0 ? (
        <EmptyContainer
          imgURL={
            "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/empty%2Fenpty-fav.webp?alt=media&token=bf5883da-1920-40c0-b85d-c7ecf424a07a"
          }
        />
      ) : (
        user?.orders?.map((item, i) => (
          <Box key={i}>
            <Stack w={"400px"} alignItems={"center"}>
              <Box
                position={"relative"}
                w={"400px"}
                h={"250px"}
                m={"auto"}
                rounded={"10px"}
                overflow={"hidden"}
              >
                <Image src={item.imgURL} alt="" fill />
              </Box>
              <Box>
                <Heading
                  fontSize={{ base: "xl" }}
                  w={"fit-content"}
                  fontWeight={400}
                  mt={"20px"}
                >
                  {item.name}
                </Heading>
                <Text>{item.price}</Text>
              </Box>
              <Box
                border={"2px solid #e8e8e8"}
                w={"100%"}
                p={"10px"}
                rounded={"10px"}
                fontSize={"12px"}
                cursor={"pointer"}
                bgColor={"red.200"}
              >
                <Text as={"b"}>{item.address.name}</Text>
                <Text>{item.address.mobile}</Text>
                <Text>{item.address.address}</Text>
                <Text>{item.address.zip}</Text>
              </Box>
            </Stack>
          </Box>
        ))
      )}
    </Flex>
  );
};

export default Order;
