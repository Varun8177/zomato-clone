import Sections from "@/components/Delivery/Sections";
import DeleveryNavbar from "@/components/Navbar/DeleveryNavbar";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import React from "react";
const Restaurants = () => {
  return (
    <Box>
      <DeleveryNavbar />
      <Flex
        w={{
          base: "90%",
          lg: "80%",
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
      <Sections index={2} />
    </Box>
  );
};

export default Restaurants;
