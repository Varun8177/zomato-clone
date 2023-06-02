import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CollectionCards from "./cards/CollectionCards";
import { getCollections } from "@/redux/actions/PlacesAction";
import { useDispatch, useSelector } from "react-redux";

const Collections = () => {
  const dispatch = useDispatch();
  const { collections, place } = useSelector((state) => state.placeReducer);
  useEffect(() => {
    const controller = new AbortController();
    getCollections(dispatch, controller, place);
    return () => {
      controller.abort();
    };
  }, [dispatch, place]);
  return (
    <Box w={{ base: "100%", lg: "70%" }} m={"auto"} mt={"50px"}>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        m={{ base: "auto", lg: "0" }}
        w={"fit-content"}
        fontWeight={500}
      >
        Collections
      </Heading>
      <Text color={"gray.500"}>
        Explore curated lists of top restaurants, cafes, pubs, and bars in
        Nagpur, based on trends
      </Text>
      <Flex
        w={"100%"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={"20px"}
        mt={"20px"}
      >
        {collections?.slice(0, 4)?.map((item, i) => {
          return (
            <CollectionCards
              key={i}
              imgURL={item.collection.image_url}
              title={item.collection.title}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default Collections;
