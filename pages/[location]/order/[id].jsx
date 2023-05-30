import React, { useEffect } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Divider,
  Flex,
  Heading,
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
import OrderTabs from "@/components/Order/OrderTabs";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getRestruntDetails } from "@/redux/slices/PlacesSlice";
import Link from "next/link";
import { useRouter } from "next/router";

const Order = ({ restaurant }) => {
  const router = useRouter();
  const { place } = useSelector((state) => state.placeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestruntDetails(restaurant));
  });

  const fetchDetails = async (name) => {
    if (name) {
      // try {
      //   const res = await axios.get(
      //     `https://foodiefetch.p.rapidapi.com/swiggy`,
      //     {
      //       params: {
      //         query: name,
      //       },
      //       headers: {
      //         "X-RapidAPI-Key":
      //           "b8aff06a70msh62275ffba91f069p1212eajsn4fb5db6667bd",
      //         "X-RapidAPI-Host": "foodiefetch.p.rapidapi.com",
      //       },
      //     }
      //   );
      //   const { data } = res;
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };
  useEffect(() => {
    fetchDetails(restaurant.name);
  }, [restaurant.name]);
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
            <Link href="/" passHref>
              Home
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href="/" passHref>
              India
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href="/" passHref>
              {place}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={`/${place}/delivery`} passHref>
              Order Online
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Link href={`/${place}/order/${restaurant.R.res_id}`} passHref>
              {restaurant.name}
            </Link>
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
            <Image src={restaurant.featured_image} alt="" fill />
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
              <Image src={restaurant.featured_image} alt="" fill />
            </Box>
            <Box
              cursor={"pointer"}
              position={"relative"}
              w={"100%"}
              h={"50%"}
              objectFit={"cover"}
              overflow={"hidden"}
            >
              <Image src={restaurant.featured_image} alt="" fill />
            </Box>
          </Flex>
        </Show>
        <Show above="lg">
          <Box
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            bgImage={restaurant.featured_image}
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
          <Heading fontWeight={400}>{restaurant.name}</Heading>
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
              rating={restaurant.user_rating.aggregate_rating}
            />
          </Flex>
        </Flex>
        <Text>{restaurant.cuisines}</Text>
        <Text color={"GrayText"}>{restaurant.location.address}</Text>
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
      <OrderTabs />
    </Box>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://developers.zomato.com/api/v2.1/restaurant?res_id=${params.id}`,
    {
      headers: {
        "user-key": process.env.NEXT_PUBLIC_ZOMATO_USER_KEY,
      },
    }
  );

  return {
    props: {
      restaurant: res.data,
    },
  };
};

export default Order;
