import { Box, Heading, Text, useToast } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const OptionCards = ({ imgURL, title, subTitle, path }) => {
  const router = useRouter();
  const { place } = useSelector((state) => state.placeReducer);
  const toast = useToast();
  return (
    <Box
      h={"100%"}
      w={"30%"}
      minW={"220px"}
      overflow={"hidden"}
      borderRadius={"10px"}
      border={"1px solid #e8e8e8"}
      cursor={"pointer"}
      m={{
        base: "auto",
        lg: "0",
      }}
      mt={{ base: "10px", lg: "0" }}
      onClick={() => {
        if (place) {
          router.push(path);
        } else {
          toast.closeAll();
          toast({
            title: "Please select a location to proceed",
            status: "warning",
            position: "top",
          });
        }
      }}
    >
      <Box position={"relative"} h={"150px"} w={"100%"}>
        <Image src={imgURL} alt="" fill style={{ objectFit: "cover" }} />
      </Box>
      <Box mt={"5px"} ml={"10px"}>
        <Text as={"b"} fontWeight={400} fontSize={"2xl"} color={"#363636"}>
          {title}
        </Text>
        <Text color={"gray.500"}>{subTitle}</Text>
      </Box>
    </Box>
  );
};

export default OptionCards;
