import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Hide,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { IoMdLocate } from "react-icons/io";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  getPlace,
  getRestrauntSuccess,
  getSearchSuccess,
} from "@/redux/slices/PlacesSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Auth } from "@/firebase/firebase.config";
import { getUserDataSuccess } from "@/redux/slices/UserSlice";
import {
  getInitalUser,
  getMobileInitialUser,
} from "@/redux/actions/UserAction";
import { searchReq } from "@/redux/actions/PlacesAction";

const DeleveryNavbar = () => {
  const { place, searchResults } = useSelector((state) => state.placeReducer);
  const { user } = useSelector((store) => store.userReducer);
  const router = useRouter();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

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

  useEffect(() => {
    let sub = true;
    dispatch(getPlace(router.query.location));
    return () => {
      sub = false;
    };
  }, [dispatch, router.query.location]);

  const options = [
    { name: "profile", link: "/profile?t=0" },
    { name: "bookmarks", link: "/profile?t=4" },
    { name: "recently viewed", link: "/profile?t=3" },
    { name: "order history", link: "/profile?t=5" },
  ];
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        if (user.providerData[0].providerId == "phone") {
          getMobileInitialUser(dispatch, user);
        } else {
          getInitalUser(user.uid, dispatch);
        }
      } else {
        dispatch(getUserDataSuccess(null));
      }
    });
    return () => {
      unSubscribe();
    };
  }, [dispatch]);

  const handleSearch = (search, dispatch) => {
    const timeout = setTimeout(() => {
      if (search.length > 0) {
        searchReq(dispatch, search, place);
      }
    }, 400);
    return timeout;
  };

  useEffect(() => {
    let timeoutId = handleSearch(search, dispatch);
    if (search.length <= 1) {
      dispatch(getRestrauntSuccess([]));
    }
    return () => {
      console.log("cleanup done for search");
      clearTimeout(timeoutId);
      dispatch(getSearchSuccess([]));
    };
  }, [search, dispatch]);
  return (
    <Flex
      alignItems={"center"}
      color={"black"}
      pt={"10px"}
      pb={"5px"}
      onClick={() => dispatch(getSearchSuccess([]))}
    >
      <Flex
        w={{
          base: "90%",
          lg: "70%",
        }}
        alignItems={"center"}
        justifyContent={"space-between"}
        m={"auto"}
      >
        <Hide above="md">
          <HamburgerIcon />
        </Hide>
        <Hide below="md">
          <Link href={"/"}>
            <Heading>zomato</Heading>
          </Link>
        </Hide>
        <Flex
          w={{
            base: "80%",
            lg: "50%",
          }}
          p={2}
          bgColor={"white"}
          borderRadius={10}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
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
              leftIcon={<IoMdLocate />}
              minW={"fit-content"}
            >
              <Text
                display={{ base: "none", md: "block" }}
                minW={"fit-content"}
              >
                {place || "Location"}
              </Text>
            </MenuButton>
            {place ? null : (
              <MenuList bgColor={"white"} color={"black"} mt={"7px"}>
                <MenuItem
                  w={"500px"}
                  pt={"10px"}
                  pb={"10px"}
                  closeOnSelect={false}
                >
                  <IoMdLocate color="red" size={20} />
                  <Text ml={"10px"} onClick={handleClick}>
                    Detect current Location Using GPS
                  </Text>
                </MenuItem>
              </MenuList>
            )}
          </Menu>
          <Divider orientation="vertical" p={"2"} h={"20px"} />

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
                w={"102%"}
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
        <Show above="lg">
          {!user ? (
            <>
              <LoginModal />
              <SignupModal />
            </>
          ) : (
            <>
              <Menu>
                <MenuButton
                  as={Button}
                  leftIcon={
                    <Avatar
                      name={user?.displayName}
                      src={user?.photoURL}
                      size={"md"}
                    />
                  }
                  bgColor={"transparent"}
                  minH={"100%"}
                  maxW={"fit-content"}
                  _hover={{ bgColor: "transparent" }}
                  _focus={{ boxShadow: "none", bgColor: "transparent" }}
                  _active={{ boxShadow: "none", bgColor: "transparent" }}
                  rightIcon={<ChevronDownIcon />}
                >
                  {user?.displayName}
                </MenuButton>
                <MenuList
                  bgColor={"white"}
                  color={"black"}
                  as={Flex}
                  direction={"column"}
                  alignItems={"flex-start"}
                >
                  {options.map((text, i) => {
                    return (
                      <MenuItem
                        key={i}
                        as={Button}
                        bgColor={"transparent"}
                        fontWeight={300}
                        textAlign={"left"}
                        w={"fit-content"}
                        _hover={{ bgColor: "transparent" }}
                        onClick={() => router.push(text.link)}
                      >
                        {text.name}
                      </MenuItem>
                    );
                  })}
                  <MenuItem
                    as={Button}
                    onClick={async () => {
                      await signOut(Auth);
                    }}
                    bgColor={"transparent"}
                    fontWeight={300}
                    textAlign={"left"}
                    w={"fit-content"}
                    _hover={{ bgColor: "transparent" }}
                  >
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
        </Show>
      </Flex>
    </Flex>
  );
};

export default DeleveryNavbar;
