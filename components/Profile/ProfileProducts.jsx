import { Box, Flex, IconButton, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ProductCards from "../Delivery/cards/ProductCards";
import ProductSkeleton from "../ProductSkeleton";
import { useSelector } from "react-redux";
import { RemoveFavouriteReq } from "@/redux/actions/UserAction";
import { useRouter } from "next/router";

const ProfileProducts = ({ bookmarks, getRestraunts }) => {
  const [removeLoad, setRemoveLoad] = useState(false);
  const router = useRouter();
  const { user } = useSelector((store) => store.userReducer);
  const toast = useToast();
  const handleRemoved = () => {
    getRestraunts(user.uid, "favourites");
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
    >
      {bookmarks.length <= 0
        ? new Array(6).fill(0).map((_, i) => {
            return <ProductSkeleton key={i} />;
          })
        : bookmarks?.map((rest, i) => (
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
              {router.query.t == 4 ? (
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
                    RemoveFavouriteReq(user.uid, rest, handleRemoved);
                  }}
                />
              ) : null}
            </Box>
          ))}
    </Flex>
  );
};

export default ProfileProducts;
