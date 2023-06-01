import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCards from "./cards/ProductCards";
import { useDispatch, useSelector } from "react-redux";
import { getRestraunts } from "@/redux/actions/PlacesAction";
import ProductSkeleton from "../ProductSkeleton";
import Pagination from "./Pagination";
import EmptyContainer from "../Profile/EmptyContainer";
import { useRouter } from "next/router";

const Products = ({ title, data }) => {
  const { place, load } = useSelector((state) => state.placeReducer);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const router = useRouter();

  const handlePage = (val) => {
    setPage(page + val);
  };
  useEffect(() => {
    const controller = new AbortController();
    getRestraunts(dispatch, controller, place, 18 * page);
    return () => {
      console.log("cleaning up");
      controller.abort();
    };
  }, [dispatch, place, page]);

  useEffect(() => {
    if (router.query.p) {
      setPage(router.query.p);
    }
  }, [router.query.p]);
  return (
    <Box bg={"#ffff"} pt={10} mt={"10px"} pb={10}>
      <Box w={{ base: "90%", lg: "70%" }} m={"auto"}>
        <Heading fontWeight={"400"} fontSize={"3xl"} mb={"20px"}>
          {title}
        </Heading>

        <Flex w={"100%"} flexWrap={"wrap"} justifyContent={"left"} gap={"20px"}>
          {load ? (
            new Array(18).fill(0).map((_, i) => {
              return <ProductSkeleton key={i} />;
            })
          ) : data.length === 0 ? (
            <EmptyContainer
              imgURL={
                "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/empty%2Fenpty-fav.webp?alt=media&token=bf5883da-1920-40c0-b85d-c7ecf424a07a"
              }
            />
          ) : (
            data?.map((rest) => (
              <ProductCards
                key={rest.restaurant.id}
                res_id={rest.restaurant.R.res_id}
                imgURL={rest.restaurant.featured_image}
                name={rest.restaurant.name}
                rating={rest.restaurant.user_rating.aggregate_rating}
                highlight={rest.restaurant.cuisines}
                cost={rest.restaurant.average_cost_for_two}
                bg_color={rest.restaurant.user_rating.rating_color}
              />
            ))
          )}
        </Flex>
      </Box>
      <Pagination page={page} handlePage={handlePage} data={data} />
    </Box>
  );
};

export default Products;
