import { Box, Button, ModalBody, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Success = () => {
  const router = useRouter();
  return (
    <ModalBody>
      <Stack w={"400px"} alignItems={"center"}>
        <Box
          position={"relative"}
          w={"400px"}
          h={"400px"}
          m={"auto"}
          rounded={"10px"}
          overflow={"hidden"}
        >
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/payment%2F3226836.jpg?alt=media&token=188eb40a-21eb-4020-948a-2ac66043f29c"
            }
            alt=""
            fill
          />
        </Box>
        <Text>Order has been successfully placed</Text>
        <Button
          bgColor={"red.400"}
          color={"white"}
          mt={"10px"}
          _hover={{ bgColor: "red.500" }}
          onClick={() => {
            router.push("/profile?t=5");
          }}
        >
          check order status
        </Button>
      </Stack>
    </ModalBody>
  );
};

export default Success;
