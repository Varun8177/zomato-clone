import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  ModalBody,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AddOrderReq } from "@/redux/actions/UserAction";
import { ChevronDownIcon } from "@chakra-ui/icons";

const OrderConfirm = ({ handleStep, add, name, price, imgURL }) => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const { user } = useSelector((store) => store.userReducer);
  const toast = useToast();
  const [selected, setSelected] = useState(false);
  const handleSuccess = () => {
    handleStep("success");
    setLoad(false);
  };
  return (
    <ModalBody>
      <Stack w={"400px"}>
        <Box
          position={"relative"}
          w={"400px"}
          h={"250px"}
          m={"auto"}
          rounded={"10px"}
          overflow={"hidden"}
        >
          <Image src={imgURL} alt="" fill />
        </Box>
        <Flex alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
          <Box>
            <Heading
              fontSize={{ base: "xl" }}
              w={"fit-content"}
              fontWeight={400}
              mt={"20px"}
            >
              {name}
            </Heading>
            <Text>₹{price}</Text>
          </Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bgColor={"white"}
              _hover={{ bgColor: "white" }}
            >
              {selected ? "Cash on delivery" : "Available payment options"}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setSelected(true)}>
                Cash on delivery
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Box
          border={"2px solid #e8e8e8"}
          w={"100%"}
          p={"10px"}
          rounded={"10px"}
          fontSize={"12px"}
          cursor={"pointer"}
          bgColor={"red.200"}
        >
          <Text as={"b"}>{add.name}</Text>
          <Text>{add.mobile}</Text>
          <Text>{add.address}</Text>
          <Text>{add.zip}</Text>
        </Box>
        <Button
          textAlign={"center"}
          bgColor={"red.400"}
          color={"white"}
          mt={"10px"}
          w={"fit-content"}
          _hover={{ bgColor: "red.500" }}
          onClick={() => {
            if (selected) {
              setLoad(true);
              AddOrderReq(
                user.uid,
                {
                  name,
                  price,
                  imgURL,
                  address: add,
                },
                dispatch,
                handleSuccess
              );
            } else {
              toast.closeAll();
              toast({
                title: "please select a payment method",
                status: "error",
                position: "top-left",
                isClosable: true,
              });
            }
          }}
          isLoading={load}
        >
          confirm order
        </Button>
      </Stack>
    </ModalBody>
  );
};

export default OrderConfirm;
