import { Button, Flex, IconButton, ModalBody, Text } from "@chakra-ui/react";
import React from "react";
import { GrAddCircle } from "react-icons/gr";
import { useSelector } from "react-redux";

const Address = ({ handleStep }) => {
  const { user } = useSelector((store) => store.userReducer);
  console.log(user.address);
  return (
    <ModalBody>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"column"}
      >
        <Flex
          w={"250px"}
          h={"100px"}
          fontWeight={400}
          border={"2px dotted #e8e8e8"}
          alignItems={"center"}
          justifyContent={"center"}
          rounded={"10px"}
          direction={"column"}
          cursor={"pointer"}
          _hover={{ bgColor: "#e8e8e8" }}
        >
          <IconButton
            bg={"transparent"}
            size={"md"}
            icon={<GrAddCircle size={30} />}
            _hover={{ bg: "transparent" }}
          />
          <Text as={"b"}>Add Address</Text>
        </Flex>
        <Button
          bgColor={"red.400"}
          color={"white"}
          mt={"10px"}
          _hover={{ bgColor: "red.500" }}
          onClick={() => {
            handleStep("address");
          }}
        >
          Proceed
        </Button>
      </Flex>
    </ModalBody>
  );
};

export default Address;
