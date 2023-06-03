import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { IoMdLocate } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  getLiveLocation,
  getLocationDetails,
  searchReq,
} from "@/redux/actions/PlacesAction";
import { useRouter } from "next/router";
import {
  getPlace,
  getSearchSuccess,
  getSuggestionSuccess,
  startLocationLoading,
} from "@/redux/slices/PlacesSlice";
import { getRestrauntSuccess } from "@/redux/slices/PlacesSlice";

const Hero = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const { place, suggestions, locationLoad, searchResults } = useSelector(
    (state) => state.placeReducer
  );
  useEffect(() => {
    if (router.query.l) {
      dispatch(getPlace(router.query.l));
    }
  }, [dispatch, router.query.l]);
  const CreateQuery = (val) => {
    console.log(val);
    router.push({ query: { l: val } });
  };
  const handleClick = () => {
    if (navigator.geolocation) {
      dispatch(startLocationLoading());
      navigator.geolocation.getCurrentPosition((positions) => {
        router.push({
          query: {
            lat: positions.coords.latitude,
            lon: positions.coords.longitude,
          },
        });
        getLiveLocation(positions.coords, dispatch, CreateQuery);
      });
    }
  };

  const handleChange = (text, dispatch) => {
    const timeout = setTimeout(() => {
      if (text.length > 0) {
        getLocationDetails(text, dispatch);
      }
    }, 600);
    return timeout;
  };

  const handleSearch = (search, dispatch) => {
    const timeout = setTimeout(() => {
      if (search.length > 0) {
        searchReq(dispatch, search, place);
      }
    }, 300);
    return timeout;
  };

  useEffect(() => {
    let timeoutId = handleChange(text, dispatch);

    return () => {
      console.log("cleanup done");
      clearTimeout(timeoutId);
    };
  }, [text, dispatch]);

  useEffect(() => {
    let timeoutId = handleSearch(search, dispatch);
    if (search.length === 0) {
      dispatch(getSearchSuccess([]));
    }
    return () => {
      console.log("cleanup done for search");
      clearTimeout(timeoutId);
      dispatch(getSearchSuccess([]));
    };
  }, [search, dispatch]);

  return (
    <Flex
      flexDir={"column"}
      h={"70%"}
      alignItems={"center"}
      justify={"center"}
      color={"white"}
      onClick={() => dispatch(getSearchSuccess([]))}
    >
      <Heading fontSize={"7xl"}>zomato</Heading>
      <Heading
        fontWeight={"200"}
        mt={"2%"}
        fontSize={{
          base: "md",
          sm: "lg",
          lg: "2xl",
        }}
      >
        Discover the best food & drinks in {place ? place : "your city"}
      </Heading>
      <Flex
        w={{
          base: "90%",
          lg: "50%",
        }}
        mt={"2%"}
        p={2}
        bgColor={"white"}
        borderRadius={10}
      >
        <Menu>
          <MenuButton
            as={Button}
            bgColor={"white"}
            color={"black"}
            w={"40%"}
            borderRightRadius={"0"}
            border={"none"}
            _hover={{ bgColor: "white" }}
            _focus={{ bgColor: "white", outline: "none", boxShadow: "none" }}
            rightIcon={<ChevronDownIcon />}
            focusBorderColor={"gray.300"}
            outline={"0"}
          >
            <Flex
              alignItems={"center"}
              gap={"10px"}
              _hover={{ bgColor: "white" }}
              _focus={{ bgColor: "white", outline: "none" }}
              focusBorderColor={"gray.300"}
            >
              <IoMdLocate />
              <Text
                display={{ base: "none", sm: "block" }}
                minW={"fit-content"}
              >
                {place || "Location"}
              </Text>
            </Flex>
          </MenuButton>
          <MenuList bgColor={"white"} color={"black"} mt={"7px"}>
            <MenuItem w={"500px"} pt={"10px"} pb={"10px"} closeOnSelect={false}>
              <IoMdLocate color="red" size={20} />
              <Text ml={"10px"} onClick={handleClick}>
                {locationLoad
                  ? "Determining your location..."
                  : "Detect current Location Using GPS"}
              </Text>
            </MenuItem>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                {<SearchIcon color="gray.300" />}
              </InputLeftElement>
              <Input
                placeholder="search for the location here.."
                onChange={(e) => setText(e.target.value)}
                variant={"filled"}
              />
            </InputGroup>
            {suggestions.length
              ? suggestions.map((s) => {
                  return (
                    <MenuItem
                      key={s.entity_id}
                      onClick={() => {
                        dispatch(getPlace(s.name));
                        dispatch(getSuggestionSuccess([]));
                        CreateQuery(s.name);
                      }}
                    >
                      {s.name + ", " + s.country_name}
                    </MenuItem>
                  );
                })
              : null}
          </MenuList>
        </Menu>
        <Box w={"100%"} position={"relative"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              {<SearchIcon color="gray.300" />}
            </InputLeftElement>
            <Input
              borderLeftRadius={"0"}
              variant={"filled"}
              type="tel"
              placeholder="search for restaurant, cuisine or a dish"
              bgColor={"white"}
              _hover={{ bgColor: "white" }}
              _focus={{ bgColor: "white" }}
              border={"none"}
              color={"black"}
              onChange={(e) => {
                if (e.target.value.length < 1) {
                  dispatch(getSearchSuccess([]));
                } else {
                  setSearch(e.target.value);
                }
              }}
            />
          </InputGroup>
          {!searchResults.length && search.length > 1 && (
            <Center
              position={"absolute"}
              bgColor={"white"}
              // w={"455px"}
              w={"101%"}
              maxH={"300px"}
              h={"fit-content"}
              overflow={"auto"}
              zIndex={9}
              p={"10px"}
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          )}
          {searchResults.length > 0 && (
            <Box
              position={"absolute"}
              bgColor={"white"}
              // w={"455px"}
              w={"101%"}
              maxH={"300px"}
              h={"fit-content"}
              overflow={"auto"}
              zIndex={9}
              p={"10px"}
            >
              {searchResults?.map((item, i) => {
                return (
                  <Text
                    zIndex={9}
                    key={i}
                    color={"black"}
                    mb={"10px"}
                    cursor={"pointer"}
                    onClick={() => {
                      router.push(
                        `/${item.restaurant.location.city}/order/${item.restaurant.R.res_id}`
                      );
                    }}
                  >
                    {item.restaurant.name} ,
                    <span>{item.restaurant.location.city}</span>
                  </Text>
                );
              })}
            </Box>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
