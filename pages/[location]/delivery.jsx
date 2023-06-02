import Products from "@/components/Delivery/Products";
import Sections from "@/components/Delivery/Sections";
import Slider from "@/components/Delivery/slider/slider";
import DeleveryNavbar from "@/components/Navbar/DeleveryNavbar";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Delivery = () => {
  const { place, restraunts, ActiveFilters } = useSelector(
    (state) => state.placeReducer
  );

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
            <Link href="/" passHref>
              Home
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href={`/`} passHref>
              {place}
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link href={`/${place}/delivery`} passHref>
              delivery
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Sections index={0} />
      {ActiveFilters.length <= 0 ? (
        <>
          <Box bg={"#f8f8f8"} pt={10} pb={10}>
            <Box w={{ base: "90%", lg: "70%" }} m={"auto"}>
              <Heading fontWeight={"400"} fontSize={"3xl"} mb={"20px"}>
                Inspiration for your first order
              </Heading>
              <Slider />
            </Box>
          </Box>
        </>
      ) : null}
      <Products title={`Delivery Restaurants in ${place}`} data={restraunts} />
    </Box>
  );
};

export default Delivery;
