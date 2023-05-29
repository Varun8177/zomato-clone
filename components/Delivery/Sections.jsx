import React from "react";
import {
  Divider,
  Flex,
  Show,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import TabCards from "./cards/TabCards";
import DeliveryTab from "./cards/DeliveryTab";
const Sections = ({ index }) => {
  const tabDetails = [
    {
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/delevery-bike.webp?alt=media&token=2bad3db3-7b50-446f-b1f0-5b20115b624d",
      title: "Delivery",
      section: "delivery",
    },
    {
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/dining-out.webp?alt=media&token=a0df127c-67e2-4f21-90d2-17991cebd71c",
      title: "Dining Out",
      section: "dine-out",
    },
    {
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/night-life.webp?alt=media&token=e5804902-3eb1-48ea-a1ab-bd01906ab508",
      title: "Night Life",
      section: "restaurants",
    },
  ];
  return (
    <Flex
      w={{
        base: "90%",
        lg: "70%",
      }}
      alignItems={"center"}
      justifyContent={"space-between"}
      m={"auto"}
    >
      <Tabs variant="unstyled" w={"100%"} defaultIndex={index}>
        <TabList flexWrap={"wrap"} m={"auto"}>
          {tabDetails.map((tab, i) => {
            return <TabCards key={i} {...tab} />;
          })}
        </TabList>
        <Show above="md">
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="#ff7e8b"
            borderRadius="1px"
          />
        </Show>
        <Divider />
        <TabPanels>
          <DeliveryTab />
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Sections;
