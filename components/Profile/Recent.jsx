import { Box, Flex, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import ProductCards from "../Delivery/cards/ProductCards";
import { useSelector } from "react-redux";
import EmptyContainer from "./EmptyContainer";

const Recent = () => {
  const { user } = useSelector((store) => store.userReducer);
  return (
    <Flex
      w={"100%"}
      flexWrap={"wrap"}
      justifyContent={"left"}
      gap={"20px"}
      h={"fit-content"}
      overflow={"auto"}
      maxH={"900px"}
    >
      {user?.recent?.length <= 0 ? (
        <EmptyContainer
          imgURL={
            "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/empty%2Fenpty-reviews.webp?alt=media&token=56a1f74d-fe73-4f94-8069-1556b95f0da4"
          }
        />
      ) : (
        user?.recent?.map((rest, i) => (
          <Box key={rest.id}>
            <ProductCards
              res_id={rest.R.res_id}
              imgURL={rest.featured_image}
              name={rest.name}
              rating={rest.user_rating.aggregate_rating}
              highlight={rest.cuisines}
              cost={rest.average_cost_for_two}
              bg_color={rest.user_rating.rating_color}
            />
          </Box>
        ))
      )}
    </Flex>
  );
};

export default Recent;
