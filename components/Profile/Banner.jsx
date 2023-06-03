import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import EditModal from "./EditModal";

const Banner = () => {
  const { user } = useSelector((store) => store.userReducer);

  return (
    <Flex
      w={{ base: "90%", md: "70%" }}
      alignItems={"center"}
      m={"auto"}
      h={{ base: "200px", md: "200px" }}
      bgImage={
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/profile-banner2.jpg?alt=media&token=1832ba80-166f-4dc3-bc2a-3a9420a37ea6"
      }
      backgroundSize={"cover"}
      gap={5}
      justifyContent={"space-between"}
    >
      <Flex
        w={"90%"}
        alignItems={"center"}
        m={"auto"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"} h={"100%"} gap={"20px"}>
          <Avatar src={user?.photoURL} size={"2xl"} borderWidth={2} />
          <Text fontWeight={400} fontSize={"25px"} color={"white"}>
            {user?.displayName}
          </Text>
        </Flex>
        <Box textAlign={"right"}>
          <EditModal />
          <Flex alignItems={"center"} gap={"20px"}>
            {new Array(3).fill(0).map((item, i) => {
              return (
                <Box
                  key={i}
                  color={"white"}
                  fontSize={"20px"}
                  textAlign={"center"}
                >
                  <Text>0</Text>
                  <Text>Reviews</Text>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Banner;
