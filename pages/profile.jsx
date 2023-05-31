import DeleveryNavbar from "@/components/Navbar/DeleveryNavbar";
import { Box, Divider, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "@/components/Profile/Banner";
import Sidebar from "@/components/Profile/Sidebar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import ProductSkeleton from "@/components/ProductSkeleton";
import ProductCards from "@/components/Delivery/cards/ProductCards";

const Profile = () => {
  const { user } = useSelector((store) => store.userReducer);
  const [bookmarks, setBookmarks] = useState([]);
  const getRestraunts = async (id) => {
    const res = await getDoc(doc(db, "favourites", id));
    if (res.exists()) {
      console.log(res.data());
      setBookmarks(res.data().restraunts);
    }
  };
  useEffect(() => {
    if (user && user.uid) {
      getRestraunts(user.uid);
    }
  }, [user]);
  return (
    <Box>
      <DeleveryNavbar />
      <Divider mt={"10px"} />
      <Banner />
      <Flex w={{ base: "90%", md: "70%" }} m={"auto"} mt={"30px"} gap={"10px"}>
        <Box>
          <Sidebar
            options={[
              "Reviews",
              "Photos",
              "Followers",
              "Recently viewed",
              "Bookmarks",
              "Blog Posts",
            ]}
            heading={"ACTIVITY"}
            active={0}
          />
          <Sidebar
            options={["Order History", "My addresses", "Favorite Orders"]}
            heading={"ONLINE ORDERING"}
          />
          <Sidebar
            options={["Credits", "Manage Wallets", "Manage Cards"]}
            heading={"PAYMENTS"}
          />
          <Sidebar options={["Your Bookings"]} heading={"TABLE BOOKING"} />
        </Box>
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
            : bookmarks?.map((rest) => (
                <ProductCards
                  key={rest.id}
                  res_id={rest.R.res_id}
                  imgURL={rest.featured_image}
                  name={rest.name}
                  rating={rest.user_rating.aggregate_rating}
                  highlight={rest.cuisines}
                  cost={rest.average_cost_for_two}
                  bg_color={rest.user_rating.rating_color}
                />
              ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Profile;
