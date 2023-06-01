import DeleveryNavbar from "@/components/Navbar/DeleveryNavbar";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "@/components/Profile/Banner";
import Sidebar from "@/components/Profile/Sidebar";
import { useRouter } from "next/router";
import EmptyContainer from "@/components/Profile/EmptyContainer";
import { GrAddCircle } from "react-icons/gr";
import Bookmarks from "@/components/Profile/Bookmarks";
import Recent from "@/components/Profile/Recent";
import Order from "@/components/Profile/Order";
import Address from "@/components/Profile/Address";

const Profile = () => {
  const { user } = useSelector((store) => store.userReducer);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const handleTab = (val) => {
    setActiveTab(val);
  };

  useEffect(() => {
    if (router.query.t) {
      setActiveTab(+router.query.t);
    }
  }, [router.query]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);
  return (
    <Box>
      <DeleveryNavbar />
      <Divider mt={"10px"} />
      <Banner />
      <Flex w={{ base: "90%", md: "70%" }} m={"auto"} mt={"30px"} gap={"10px"}>
        <Box>
          <Sidebar
            options={[
              { name: "Reviews", id: 0 },
              { name: "Photos", id: 1 },
              { name: "Followers", id: 2 },
              { name: "Recently viewed", id: 3 },
              { name: "Bookmarks", id: 4 },
              "Blog Posts",
            ]}
            heading={"ACTIVITY"}
            active={activeTab}
            handleTab={handleTab}
          />
          <Sidebar
            options={[
              { name: "Order History", id: 5 },
              { name: "My addresses", id: 6 },
              { name: "Favorite Orders", id: 7 },
            ]}
            heading={"ONLINE ORDERING"}
            active={activeTab}
            handleTab={handleTab}
          />
          <Sidebar
            options={[
              { name: "Credits", id: 8 },
              { name: "Manage Wallets", id: 9 },
              { name: "Manage Cards", id: 10 },
            ]}
            heading={"PAYMENTS"}
            active={activeTab}
            handleTab={handleTab}
          />
          <Sidebar
            options={[{ name: "Your Bookings", id: 11 }]}
            heading={"TABLE BOOKING"}
            active={activeTab}
            handleTab={handleTab}
          />
        </Box>
        {router.query.t == 0 ? (
          <Box w={"100%"}>
            <Heading fontWeight={400}>Reviews</Heading>
            <EmptyContainer
              imgURL={
                "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/empty%2Fenpty-reviews.webp?alt=media&token=56a1f74d-fe73-4f94-8069-1556b95f0da4"
              }
            />
          </Box>
        ) : router.query.t == 1 ? (
          <Box w={"100%"}>
            <Heading fontWeight={400}>Photos</Heading>
            <EmptyContainer
              imgURL={
                "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/empty%2Fenpty-photos.webp?alt=media&token=c2f7e4f1-d93f-438a-8bb1-3896e4d4ed55"
              }
            />
          </Box>
        ) : router.query.t == 2 ? (
          <Box w={"100%"}>
            <Heading fontWeight={400}>Followers</Heading>
            <Box w={"100%"} mt={"20px"}>
              <Flex gap={"20px"}>
                <Button
                  w={"fit-content"}
                  fontWeight={400}
                  color={"white"}
                  bg={"red.400"}
                  _hover={{ bg: "red.500", border: 0, color: "white" }}
                >
                  Following (0)
                </Button>
                <Button
                  w={"fit-content"}
                  fontWeight={400}
                  variant={"outline"}
                  _hover={{ bg: "red.500", border: 0, color: "white" }}
                >
                  Followers (0)
                </Button>
              </Flex>
              <EmptyContainer
                imgURL={
                  "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/empty%2Fenpty-followers.webp?alt=media&token=35be6ef8-2725-47b0-9337-9e94ad341b0f"
                }
              />
            </Box>
          </Box>
        ) : router.query.t == 3 ? (
          <Box w={"100%"}>
            <Heading fontWeight={400}>
              {router.query.t == 3 ? "Recently Viewed" : "Bookmarks"}
            </Heading>
            <Recent />
          </Box>
        ) : router.query.t == 4 ? (
          <Box w={"100%"}>
            <Heading fontWeight={400}>
              {router.query.t == 3 ? "Recently Viewed" : "Bookmarks"}
            </Heading>
            <Bookmarks />
          </Box>
        ) : router.query.t == 6 ? (
          <Box w={"100%"}>
            <Heading fontWeight={400}>My Addresses</Heading>
            <Box w={"100%"} mt={"20px"}>
              <Address />
              <Flex
                w={"250px"}
                h={"200px"}
                fontWeight={400}
                border={"2px dotted #e8e8e8"}
                alignItems={"center"}
                justifyContent={"center"}
                rounded={"10px"}
                direction={"column"}
                cursor={"pointer"}
                _hover={{ bgColor: "#e8e8e8" }}
                m={"auto"}
                mt={"30px"}
              >
                <IconButton
                  bg={"transparent"}
                  size={"md"}
                  icon={<GrAddCircle size={30} />}
                  _hover={{ bg: "transparent" }}
                />
                <Text as={"b"}>Add Address</Text>
              </Flex>
            </Box>
          </Box>
        ) : router.query.t == 7 ? (
          <Box w={"100%"}>
            <Heading fontWeight={400}>Favourites</Heading>
            <EmptyContainer
              imgURL={
                "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/empty%2Fenpty-fav.webp?alt=media&token=bf5883da-1920-40c0-b85d-c7ecf424a07a"
              }
            />
          </Box>
        ) : router.query.t == 5 ? (
          <Box w={"100%"}>
            <Heading fontWeight={400}>Order History</Heading>
            <Order />
          </Box>
        ) : null}
      </Flex>
    </Box>
  );
};

export default Profile;
