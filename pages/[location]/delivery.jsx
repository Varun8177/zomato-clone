import Products from "@/components/Delivery/Products";
import Sections from "@/components/Delivery/Sections";
import Slider from "@/components/Delivery/slider/slider";
import DeleveryNavbar from "@/components/Navbar/DeleveryNavbar";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const delivery = () => {
  return (
    <Box>
      <DeleveryNavbar />
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
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Sections index={0} />
      <Box bg={"#f8f8f8"} pt={10} pb={10}>
        <Box w={{ base: "90%", lg: "70%" }} m={"auto"}>
          <Heading fontWeight={"400"} fontSize={"3xl"} mb={"20px"}>
            Inspiration for your first order
          </Heading>
          <Slider />
        </Box>
      </Box>
      <Box bg={"#ffff"} pt={10} mt={"10px"} pb={10}>
        <Box w={{ base: "90%", lg: "70%" }} m={"auto"}>
          <Heading fontWeight={"400"} fontSize={"3xl"} mb={"20px"}>
            Top Brands For You
          </Heading>
          <Slider />
        </Box>
      </Box>
      <Products title={"Delivery Restaurants in Nagpur"} />
    </Box>
  );
};

export default delivery;
