import { AddAddressReq } from "@/redux/actions/UserAction";
import {
  Button,
  Flex,
  Input,
  ModalBody,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddressForm = ({ handleStep }) => {
  const { user } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  const handleSuccess = () => {
    handleStep("address");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      name: e.target[0].value,
      mobile: e.target[1].value,
      zip: e.target[2].value,
      address: e.target[3].value,
      landmark: e.target[4].value,
    };
    AddAddressReq(user.uid, details, dispatch, handleSuccess);
  };
  return (
    <ModalBody>
      <Stack w={"400px"} as={"form"} onSubmit={handleSubmit}>
        <Text as={"b"} color={"GrayText"} textAlign={"left"} fontWeight={400}>
          Name
        </Text>
        <Input placeholder="Enter name here..." mb={"10px"} required />
        <Text as={"b"} color={"GrayText"} textAlign={"left"} fontWeight={400}>
          Mobile Number
        </Text>
        <Input
          placeholder="Enter mobile number here..."
          mb={"10px"}
          type="number"
          minLength={10}
          maxLength={10}
          required
        />

        <Text
          as={"b"}
          color={"GrayText"}
          textAlign={"left"}
          fontWeight={400}
          type="number"
        >
          zip code
        </Text>
        <Input placeholder="Enter Pincode here..." mb={"10px"} required />

        <Text as={"b"} color={"GrayText"} textAlign={"left"} fontWeight={400}>
          Address
        </Text>
        <Textarea
          placeholder="Enter Address here..."
          defaultValue={user.phoneNumber}
          mb={"10px"}
          required
        />
        <Text
          as={"b"}
          color={"GrayText"}
          textAlign={"left"}
          fontWeight={400}
          type="number"
        >
          Landmark (optional)
        </Text>
        <Input placeholder="Enter landmark here..." mb={"10px"} />
        <Flex w={"100%"} justifyContent={"space-between"}>
          <Button
            mt={"10px"}
            variant={"outline"}
            _hover={{ bgColor: "none" }}
            onClick={() => {
              handleStep("address");
            }}
          >
            back
          </Button>
          <Button
            bgColor={"red.400"}
            color={"white"}
            mt={"10px"}
            _hover={{ bgColor: "red.500" }}
            type="submit"
          >
            Add
          </Button>
        </Flex>
      </Stack>
    </ModalBody>
  );
};

export default AddressForm;
