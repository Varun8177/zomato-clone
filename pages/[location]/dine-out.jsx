import Products from "@/components/Delivery/Products";
import Sections from "@/components/Delivery/Sections";
import DineOutTab from "@/components/Dine-out/cards/DineOutTab";
import Collections from "@/components/Home/Collections";
import DeleveryNavbar from "@/components/Navbar/DeleveryNavbar";
import { getNightLifeReq } from "@/redux/actions/PlacesAction";
import { Box, Breadcrumb, BreadcrumbItem, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dineout = () => {
  const { place, dineoutData } = useSelector((state) => state.placeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    getNightLifeReq(dispatch, controller, place, "dinner", 2);
    return () => {
      controller.abort();
    };
  }, [dispatch, place]);
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
              dine out
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Sections index={1} />

      <Box bgColor={"#f8f8f8"} pt={5} pb={5}>
        <Collections />
      </Box>
      <DineOutTab />
      <Products
        title={`Best Dining Restaurants near you in ${place}`}
        data={dineoutData}
      />
    </Box>
  );
};

export default Dineout;
