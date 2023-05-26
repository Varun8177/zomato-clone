import Products from "@/components/Delivery/Products";
import Sections from "@/components/Delivery/Sections";
import DineOutTab from "@/components/Dine-out/cards/DineOutTab";
import Collections from "@/components/Home/Collections";
import DeleveryNavbar from "@/components/Navbar/DeleveryNavbar";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const Dineout = () => {
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
      <Sections index={1} />

      <Box bgColor={"#f8f8f8"} pt={5} pb={5}>
        <Collections />
      </Box>
      <DineOutTab />
      <Products title={"Best Dining Restaurants near you in Nagpur"} />
    </Box>
  );
};

export default Dineout;
