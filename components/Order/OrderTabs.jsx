import {
  Tabs,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Flex,
  Divider,
  Heading,
  Show,
} from "@chakra-ui/react";
import React from "react";
import OverviewPanel from "./OverviewPanel";
import OnlineOrderPanel from "./OnlineOrderPanel";
import ReviewsPanel from "./ReviewsPanel";
import PhotosPanel from "./PhotosPanel";
import MenuPanel from "./MenuPanel";

const OrderTabs = () => {
  const options = ["Overview", "Order Online", "Reviews", "Photos", "Menu"];
  // const optionPanels = [
  //   <OverviewPanel />,
  //   <OnlineOrderPanel key={1} />,
  //   <ReviewsPanel key={2} />,
  //   <PhotosPanel key={3} />,
  //   <MenuPanel key={4} />,
  // ];
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
      <Tabs position="relative" variant="unstyled" w={"100%"}>
        <TabList flexWrap={"wrap"}>
          {options.map((opt) => (
            <Tab key={opt}>
              <Heading
                fontSize={{ base: "xl" }}
                m={{ base: "auto", lg: "0" }}
                w={"fit-content"}
                fontWeight={400}
                color={"GrayText"}
              >
                {opt}
              </Heading>
            </Tab>
          ))}
        </TabList>
        <Show above="md">
          <TabIndicator mt="-1.5px" height="2px" bg="red" borderRadius="1px" />
        </Show>
        <Divider />
        <TabPanels>
          <TabPanel>
            <OverviewPanel />
          </TabPanel>
          <TabPanel>
            <OverviewPanel />
          </TabPanel>
          <TabPanel>
            <OverviewPanel />
          </TabPanel>
          <TabPanel>
            <OverviewPanel />
          </TabPanel>
          <TabPanel>
            <OverviewPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default OrderTabs;
