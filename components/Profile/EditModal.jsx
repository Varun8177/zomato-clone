import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { BiCamera } from "react-icons/bi";
import { UpdateUserDetails } from "@/redux/actions/UserAction";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/firebase.config";

const EditModal = () => {
  const { user } = useSelector((store) => store.userReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [email, setemail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phoneNumber || "");
  const [imgURL, setimgURL] = useState(user?.photoURL || null);
  const toast = useToast();

  const Done = () => {
    setLoad(false);
    toast({
      title: "updated successfully",
      position: "top-left",
    });
    onClose();
  };

  return (
    <>
      <Button
        leftIcon={<FiEdit />}
        bgColor={"red.400"}
        color={"white"}
        mb={"20px"}
        onClick={onOpen}
        _hover={{ bgColor: "red.500" }}
      >
        Edit Profile
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg={"blackAlpha.700"} />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              direction={"column"}
              as="form"
              alignItems={"center"}
              gap={"10px"}
              onSubmit={(e) => {
                e.preventDefault();
                setLoad(true);
                const details = {
                  photoURL: imgURL,
                  displayName: name,
                  phoneNumber: phone,
                  email,
                };
                UpdateUserDetails(dispatch, details, user.uid, Done);
              }}
            >
              <Input
                type="file"
                id="profileEdit"
                display={"none"}
                onChange={async (e) => {
                  const storageRef = ref(storage, name);
                  const file = e.target.files[0];
                  const filePath = file.name + ".xyz";
                  const fileRef = ref(storageRef, filePath); // Create a non-root reference
                  const uploadTask = uploadBytesResumable(fileRef, file);

                  try {
                    await uploadTask;

                    // Handle successful uploads
                    const downloadURL = await getDownloadURL(
                      uploadTask.snapshot.ref
                    );
                    setimgURL(downloadURL);

                    // Clear the file input value
                  } catch (error) {
                    // Handle unsuccessful uploads
                    console.error(error);
                  }
                }}
              />

              <label htmlFor="profileEdit">
                <Avatar
                  src={imgURL || user?.photoURL}
                  size={"2xl"}
                  borderWidth={2}
                  m={"auto"}
                  cursor={"pointer"}
                />
              </label>
              <Box w={"100%"} color={"GrayText"}>
                <label htmlFor="">Name</label>
                <Input
                  required
                  type="text"
                  placeholder="enter name here"
                  defaultValue={user?.displayName}
                  color={"black"}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box w={"100%"} color={"GrayText"}>
                <label htmlFor="">Mobile Number</label>
                <Input
                  required
                  type="tel"
                  placeholder="enter mobile number here"
                  color={"black"}
                  defaultValue={user?.phoneNumber}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>
              <Box w={"100%"} color={"GrayText"}>
                <label htmlFor="">Email</label>
                <Input
                  required
                  type="tel"
                  placeholder="enter mobile number here"
                  defaultValue={user?.email}
                  color={"black"}
                  onChange={(e) => setemail(e.target.value)}
                />
              </Box>
              <Button
                type="submit"
                isLoading={load}
                bgColor={"red.400"}
                color={"white"}
                _hover={{ bgColor: "red.500" }}
              >
                Edit
              </Button>
            </Flex>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
