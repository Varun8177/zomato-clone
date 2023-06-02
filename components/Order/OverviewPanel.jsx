import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Advertisement from "./orderPanel/Advertisement";
import MoreInfo from "./orderPanel/MoreInfo";
import Cuisines from "./orderPanel/Cuisines";
import Badge from "./orderPanel/Badge";
import AvgCosts from "./orderPanel/AvgCosts";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
const OverviewPanel = () => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const { restrauntDetails } = useSelector((state) => state.placeReducer);
  useEffect(() => {
    if (restrauntDetails && restrauntDetails.location) {
      setCenter({
        lat: +restrauntDetails.location.latitude,
        lng: +restrauntDetails.location.longitude,
      });
    }
  }, [restrauntDetails]);
  return (
    <Flex
      justifyContent={"space-between"}
      gap={"10px"}
      flexDir={{ base: "column", xl: "row" }}
    >
      <Box w={{ base: "100%", xl: "65%" }}>
        <Heading fontSize={{ base: "xl" }} w={"fit-content"} fontWeight={500}>
          About this Place
        </Heading>
        <Badge />
        <Cuisines />
        <AvgCosts />
        <MoreInfo />
        <Advertisement />
      </Box>
      <Box w={{ base: "100%", xl: "30%" }} h={"500px"}>
        <GoogleMap
          mapContainerStyle={{
            height: "500px",
            width: "100%",
          }}
          zoom={16}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </Box>
    </Flex>
  );
};

export default OverviewPanel;
