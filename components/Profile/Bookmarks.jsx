import { Box, Flex, IconButton, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ProductCards from "../Delivery/cards/ProductCards";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFavouriteReq } from "@/redux/actions/UserAction";
import { useRouter } from "next/router";
import EmptyContainer from "./EmptyContainer";

const Bookmarks = () => {
  const [removeLoad, setRemoveLoad] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.userReducer);
  const toast = useToast();
  const handleRemoved = () => {
    toast({
      title: "removed",
      status: "success",
    });
    setRemoveLoad(false);
  };
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
      {user?.bookmarks?.length <= 0 ? (
        <EmptyContainer
          imgURL={
            "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/empty%2Fenpty-reviews.webp?alt=media&token=56a1f74d-fe73-4f94-8069-1556b95f0da4"
          }
        />
      ) : (
        user?.bookmarks?.map((rest, i) => (
          <Box key={rest.id} position={"relative"}>
            <ProductCards
              res_id={rest.R.res_id}
              imgURL={rest.featured_image}
              name={rest.name}
              rating={rest.user_rating.aggregate_rating}
              highlight={rest.cuisines}
              cost={rest.average_cost_for_two}
              bg_color={rest.user_rating.rating_color}
            />
            <IconButton
              position={"absolute"}
              top={0}
              right={0}
              bgColor={"red.400"}
              _hover={{ bgColor: "red.600" }}
              isLoading={removeLoad === i}
              icon={<RxCross2 color="white" />}
              onClick={() => {
                setRemoveLoad(i);
                RemoveFavouriteReq(user.uid, rest, handleRemoved, dispatch);
              }}
            />
          </Box>
        ))
      )}
    </Flex>
  );
};

export default Bookmarks;
