import {
  Box,
  Button,
  Flex,
  IconButton,
  ModalBody,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { useSelector } from "react-redux";

const Address = ({ handleStep, handleAddress }) => {
  const { user } = useSelector((store) => store.userReducer);
  const [active, setActive] = useState(0);
  console.log(user.address);

  useEffect(() => {
    if (user) {
      handleAddress(user.address[active]);
    }
  }, [active, handleAddress, user]);
  return (
    <ModalBody>
      <Stack w={"400px"} alignItems={"center"}>
        {user?.address?.map((item, i) => {
          return (
            <Box
              key={i}
              border={"2px solid #e8e8e8"}
              w={"100%"}
              p={"10px"}
              rounded={"10px"}
              fontSize={"12px"}
              cursor={"pointer"}
              bgColor={active === i ? "red.200" : "white"}
              onClick={() => {
                setActive(i);
              }}
            >
              <Text as={"b"}>{item.name}</Text>
              <Text>{item.mobile}</Text>
              <Text>{item.address}</Text>
              <Text>{item.zip}</Text>
            </Box>
          );
        })}
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
          onClick={() => {
            handleStep("form");
          }}
        >
          <IconButton
            bg={"transparent"}
            size={"md"}
            icon={<GrAddCircle size={30} />}
            _hover={{ bg: "transparent" }}
          />
          <Text as={"b"}>Add Address</Text>
        </Flex>
        {user.address.length <= 0 ? null : (
          <Button
            bgColor={"red.400"}
            color={"white"}
            mt={"10px"}
            _hover={{ bgColor: "red.500" }}
            onClick={() => {
              handleStep("confirm");
            }}
          >
            Proceed
          </Button>
        )}
      </Stack>
    </ModalBody>
  );
};

export default Address;
