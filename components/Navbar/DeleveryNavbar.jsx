import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
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
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { IoMdLocate } from "react-icons/io";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getPlace } from "@/redux/slices/PlacesSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Auth } from "@/firebase/firebase.config";
import { getUserDataSuccess } from "@/redux/slices/UserSlice";

const DeleveryNavbar = () => {
  const { place } = useSelector((state) => state.placeReducer);
  const { user } = useSelector((store) => store.userReducer);
  const router = useRouter();
  const dispatch = useDispatch();
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

  const options = ["profile", "bookmarks", "reviews", "settings"];
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (user) => {
      dispatch(getUserDataSuccess(user));
    });
    return () => {
      unSubscribe();
    };
  }, [dispatch]);

  return (
    <Flex alignItems={"center"} color={"black"} pt={"10px"} pb={"5px"}>
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
                      >
                        {text}
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
