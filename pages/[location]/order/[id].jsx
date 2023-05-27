import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Show,
  Text,
} from "@chakra-ui/react";
import DeleveryNavbar from "@/components/Navbar/DeleveryNavbar";
import Image from "next/image";
import { MdOutlineDirections } from "react-icons/md";
import { BsBookmarkPlus } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import IconText from "@/components/Order/IconText";

const Order = () => {
  return (
    <Box>
      <DeleveryNavbar />
      <Divider mt={"10px"} />
      <Flex
        w={{
          base: "90%",
          lg: "70%",
        }}
        alignItems={"center"}
        justifyContent={"space-between"}
        m={"auto"}
        mt={"20px"}
        mb={"20px"}
      >
        <Breadcrumb fontSize={"sm"} fontWeight={400} color={"GrayText"}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/">India</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/">Nagpur</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/nagpur/delivery">
              Order Online
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/nagpur/order/1">
              Behrouz Biryani
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex
        w={{ base: "90%", md: "70%" }}
        alignItems={"center"}
        m={"auto"}
        h={{ base: "400px", md: "350px" }}
        gap={5}
      >
        <Box
          overflow={"hidden"}
          w={{ base: "100%", lg: "60%" }}
          h={{ base: "330px", md: "350px" }}
        >
          <Box
            cursor={"pointer"}
            _hover={{ w: "105%", h: "370px" }}
            position={"relative"}
            w={"100%"}
            h={{ base: "400px", md: "350px" }}
            objectFit={"cover"}
            overflow={"hidden"}
          >
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/birani-prop.webp?alt=media&token=a628490e-c402-483a-a61b-5ae1ccf79b31"
              }
              alt=""
              fill
            />
          </Box>
        </Box>
        <Show above="lg">
          <Flex
            flexDir={"column"}
            w={{ base: "40%", lg: "20%" }}
            justifyContent={"space-between"}
            gap={"10px"}
            h={"100%"}
          >
            <Box
              minW={"150px"}
              cursor={"pointer"}
              position={"relative"}
              w={"100%"}
              h={"50%"}
              objectFit={"cover"}
              overflow={"hidden"}
            >
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/birani-prop.webp?alt=media&token=a628490e-c402-483a-a61b-5ae1ccf79b31"
                }
                alt=""
                fill
              />
            </Box>
            <Box
              cursor={"pointer"}
              position={"relative"}
              w={"100%"}
              h={"50%"}
              objectFit={"cover"}
              overflow={"hidden"}
            >
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/birani-prop.webp?alt=media&token=a628490e-c402-483a-a61b-5ae1ccf79b31"
                }
                alt=""
                fill
              />
            </Box>
          </Flex>
        </Show>
        <Show above="lg">
          <Box
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            bgImage={
              "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/birani-prop.webp?alt=media&token=a628490e-c402-483a-a61b-5ae1ccf79b31"
            }
            h={"100%"}
            w={"20%"}
            position={"relative"}
            opacity={0.6}
            cursor={"pointer"}
          >
            <Text
              color={"white"}
              position={"absolute"}
              top={12}
              left={10}
              fontWeight={400}
            >
              View Gallery
            </Text>
          </Box>
        </Show>
      </Flex>
      <Box w={{ base: "90%", md: "70%" }} m={"auto"} mt={"15px"}>
        <Flex
          mb={"10px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Heading fontWeight={400}>Behrouz Biryani</Heading>
          <Flex alignItems={"center"} gap={10} flexWrap={"wrap"}>
            <IconText
              icon={<AiFillStar color="white" />}
              color={"gray.400"}
              reviews={0}
              title={"dining reviews"}
            />
            <IconText
              icon={<AiFillStar color="white" />}
              color={"green.400"}
              reviews={1933}
              title={"Delivery Reviews"}
              rating={5.5}
            />
          </Flex>
        </Flex>
        <Text>Biryani, Kebab</Text>
        <Text color={"GrayText"}>Jayanagar, Bangalore</Text>
        <Flex w={"100%"} gap={5} mt={"10px"} mb={"20px"} flexWrap={"wrap"}>
          <Button
            variant={"outline"}
            fontWeight={400}
            colorScheme="blackAlpha"
            leftIcon={<MdOutlineDirections color="red" />}
          >
            Direction
          </Button>
          <Button
            variant={"outline"}
            fontWeight={400}
            colorScheme="blackAlpha"
            leftIcon={<BsBookmarkPlus color="red" />}
          >
            Bookmark
          </Button>
          <Button
            variant={"outline"}
            fontWeight={400}
            colorScheme="blackAlpha"
            leftIcon={<RiShareForwardLine color="red" />}
          >
            Share
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Order;
