import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaRegThumbsUp } from "react-icons/fa";
import IconText from "../IconText";
import { AiFillStar } from "react-icons/ai";
const ReviewCard = () => {
  return (
    <Box mb={"50px"} borderBottom={"1px solid #e8e8e8"}>
      <Flex alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
        <Flex alignItems={"center"} gap={"10px"}>
          <Box
            position={"relative"}
            w={"40px"}
            h={"40px"}
            rounded={"50%"}
            overflow={"hidden"}
          >
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/night-life%26clubs.webp?alt=media&token=dc5cbe65-7d56-4d74-b111-fc0b15d9e8f0"
              }
              alt=""
              fill
            />
          </Box>
          <Box>
            <Text>Dummy Name</Text>
            <Flex color={"GrayText"} gap={"5px"} alignItems={"center"}>
              <Text>2 reviews</Text>
              <Text>0 followers</Text>
            </Flex>
          </Box>
        </Flex>
        <Button variant={"outline"} colorScheme="red">
          Follow
        </Button>
      </Flex>
      <Flex
        gap={"10px"}
        fontSize={"12px"}
        mt={"10px"}
        alignItems={"center"}
        mb={"10px"}
      >
        <IconText
          icon={<AiFillStar color="white" />}
          color={"green.400"}
          rating={4.4}
        />
        <Text>DELIVERY</Text>
        <Text color={"GrayText"}>2 hours ago</Text>
      </Flex>
      <Text color={"GrayText"}>0 Votes for helpful, 0 Comments</Text>
      <Flex
        color={"gray"}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"left"}
      >
        <Button bg={"white"} fontWeight={400} leftIcon={<FaRegThumbsUp />}>
          Helpful
        </Button>
        <Button bg={"white"} fontWeight={400} leftIcon={<TfiCommentAlt />}>
          comment
        </Button>
        <Button bg={"white"} fontWeight={400} leftIcon={<RiShareForwardLine />}>
          Share
        </Button>
      </Flex>
    </Box>
  );
};

export default ReviewCard;
