import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { IoMdLocate } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  getLiveLocation,
  getLocationDetails,
} from "@/redux/actions/PlacesAction";
import { useRouter } from "next/router";
import { getPlace, getSuggestionSuccess } from "@/redux/PlacesSlice";

const Hero = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { place, suggestions } = useSelector((state) => state.placeReducer);
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((positions) => {
        router.push({
          query: {
            lat: positions.coords.latitude,
            lon: positions.coords.longitude,
          },
        });
        getLiveLocation(positions.coords, dispatch);
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

  useEffect(() => {
    let timeoutId = handleChange(text, dispatch);

    return () => {
      console.log("cleanup done");
      clearTimeout(timeoutId);
    };
  }, [text, dispatch]);

  return (
    <Flex
      flexDir={"column"}
      h={"70%"}
      alignItems={"center"}
      justify={"center"}
      color={"white"}
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
        Discover the best food & drinks in Nagpur
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
            _hover={{ bgColor: "white" }}
            _focus={{ bgColor: "white" }}
            _active={{ bgColor: "white" }}
            rightIcon={<ChevronDownIcon />}
          >
            <Flex alignItems={"center"} gap={"10px"}>
              <IoMdLocate />
              <Text
                display={{ base: "none", sm: "block" }}
                minW={"fit-content"}
              >
                {place || "Location"}
              </Text>
            </Flex>
          </MenuButton>
          {/* {place ? null : ( */}
          <MenuList bgColor={"white"} color={"black"} mt={"7px"}>
            <MenuItem w={"500px"} pt={"10px"} pb={"10px"} closeOnSelect={false}>
              <IoMdLocate color="red" size={20} />
              <Text ml={"10px"} onClick={handleClick}>
                Detect current Location Using GPS
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
                        dispatch(getPlace(s.title));
                        dispatch(getSuggestionSuccess([]));
                      }}
                    >
                      {s.title}
                    </MenuItem>
                  );
                })
              : null}
          </MenuList>
          {/* )} */}
        </Menu>
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
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default Hero;
