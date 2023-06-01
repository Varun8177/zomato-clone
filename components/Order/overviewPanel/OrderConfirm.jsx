import { Box, Button, Heading, ModalBody, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AddOrderReq } from "@/redux/actions/UserAction";

const OrderConfirm = ({ handleStep, add }) => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const { user } = useSelector((store) => store.userReducer);
  const handleSuccess = () => {
    handleStep("success");
    setLoad(false);
  };
  return (
    <ModalBody>
      <Stack w={"400px"} alignItems={"center"}>
        <Box
          position={"relative"}
          w={"400px"}
          h={"250px"}
          m={"auto"}
          rounded={"10px"}
          overflow={"hidden"}
        >
          <Image
            src={
              "https://b.zmtcdn.com/data/pictures/3/50123/4c6fac32161308db080e09270cd03fcd_featured_v2.jpg"
            }
            alt=""
            fill
          />
        </Box>
        <Box>
          <Heading
            fontSize={{ base: "xl" }}
            w={"fit-content"}
            fontWeight={400}
            mt={"20px"}
          >
            Chocolate Hazelnut and Almonds Cup Ice Cream [100 ml]
          </Heading>
          <Text>₹60</Text>
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
          bgColor={"red.400"}
          color={"white"}
          mt={"10px"}
          _hover={{ bgColor: "red.500" }}
          onClick={() => {
            setLoad(true);
            AddOrderReq(
              user.uid,
              {
                name: "Chocolate Hazelnut and Almonds Cup Ice Cream [100 ml]",
                price: "₹60",
                imgURL:
                  "https://b.zmtcdn.com/data/pictures/3/50123/4c6fac32161308db080e09270cd03fcd_featured_v2.jpg",
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
