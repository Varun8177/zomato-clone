import { Box, Button, Heading, ModalBody, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AddOrderReq } from "@/redux/actions/UserAction";

const OrderConfirm = ({
  handleStep,
  add,
  name,
  price,
  description,
  imgURL,
}) => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const { user } = useSelector((store) => store.userReducer);
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
