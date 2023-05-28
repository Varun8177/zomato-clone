import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ProductCards from "./cards/ProductCards";
import { useDispatch, useSelector } from "react-redux";
import { getRestraunts } from "@/redux/actions/PlacesAction";

const Products = ({ title }) => {
  const { restraunts, place } = useSelector((state) => state.placeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    getRestraunts(dispatch, controller, place);
    return () => {
      console.log("cleaning up");
      controller.abort();
    };
  }, [dispatch, place]);
  return (
    <Box bg={"#ffff"} pt={10} mt={"10px"} pb={10}>
      <Box w={{ base: "90%", lg: "70%" }} m={"auto"}>
        <Heading fontWeight={"400"} fontSize={"3xl"} mb={"20px"}>
          {title}
        </Heading>

        <Flex w={"100%"} flexWrap={"wrap"} justifyContent={"left"} gap={"20px"}>
          {restraunts.map((rest) => (
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
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Products;
