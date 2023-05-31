import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LoginModal from "./Navbar/LoginModal";
import SignupModal from "./Navbar/SignupModal";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Auth } from "@/firebase/firebase.config";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataSuccess } from "@/redux/slices/UserSlice";
import { useRouter } from "next/router";

const Navbar = () => {
  const { user } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  const options = ["profile", "bookmarks", "reviews", "settings"];
  const router = useRouter();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (user) => {
      dispatch(getUserDataSuccess(user));
    });
    return () => {
      unSubscribe();
    };
  }, [dispatch]);
  console.log(user);
  return (
    <Flex alignItems={"center"} h={"80px"} bg={"transparent"} color={"white"}>
      <Flex
        w={{
          base: "90%",
          lg: "80%",
        }}
        alignItems={"center"}
        justifyContent={"space-between"}
        m={"auto"}
      >
        <Text as={"b"} cursor={"pointer"}>
          Get the app
        </Text>
        <Show above="md">
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            w={{
              base: "70%",
              lg: "50%",
            }}
          >
            <Text cursor={"pointer"}>Investor Relations</Text>
            <Text cursor={"pointer"}>Add Restraunts</Text>
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
                          onClick={() => router.push("/profile")}
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
          </Flex>
        </Show>
      </Flex>
    </Flex>
  );
};

export default Navbar;
