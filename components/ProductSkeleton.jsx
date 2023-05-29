import { Box, Divider, Flex, Skeleton, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const ProductSkeleton = () => {
  return (
    <Skeleton>
      <Box
        rounded={"10px"}
        w={"320px"}
        overflow={"hidden"}
        _hover={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        p={2}
        cursor={"pointer"}
      >
        <Box
          position={"relative"}
          w={"100%"}
          h={"200px"}
          borderRadius={"10px"}
          objectFit={"contain"}
          overflow={"hidden"}
        >
          <Text
            position={"absolute"}
            bgColor={"blackAlpha.900"}
            color={"GrayText"}
            fontSize={"10px"}
            left={4}
            top={3}
            opacity={0.5}
            p={"2px"}
          >
            Promoted
          </Text>
          <Text
            position={"absolute"}
            bgColor={"#256fef"}
            color={"white"}
            bottom={5}
            roundedRight={"10px"}
            fontSize={"15px"}
            pr={"5px"}
            pl={"5px"}
          >
            50% off upto 100
          </Text>
          <Text
            position={"absolute"}
            bgColor={"whiteAlpha.700"}
            color={"Background"}
            bottom={2}
            right={2}
            fontSize={"13px"}
            rounded={"10px"}
            p={"5px"}
          >
            25 min
          </Text>
        </Box>
        <Flex
          w={"100%"}
          justifyContent={"space-between"}
          mt={"10px"}
          alignItems={"center"}
        >
          <Text as={"b"} fontWeight={600}>
            xyz
          </Text>
          <Text
            bgColor={"#"}
            color={"Background"}
            fontSize={"13px"}
            rounded={"5px"}
            pr={"5px"}
            pl={"5px"}
            fontWeight={"bold"}
          >
            ****
          </Text>
        </Flex>
        <Flex
          w={"100%"}
          justifyContent={"space-between"}
          mt={"5px"}
          alignItems={"center"}
        >
          <Text color={"GrayText"}></Text>
          <Text color={"GrayText"}>₹60 for one</Text>
        </Flex>
        <Divider colorScheme="blackAlpha" mt={"10px"} mb={"10px"} />
        <Flex gap={"10px"}>
          <Box position={"relative"} w={"20px"} h={"20px"} objectFit={"cover"}>
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/check-delivery.webp?alt=media&token=ee6fa01b-e7f3-42f3-9cfd-49fa5d07f47e"
              }
              alt=""
              fill
            />
          </Box>
          <Text color={"GrayText"} fontSize={"12px"}>
            orders placed from here recently
          </Text>
        </Flex>
      </Box>
    </Skeleton>
  );
};

export default ProductSkeleton;
