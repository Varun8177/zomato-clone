import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import FilterModal from "../modals/FilterModal";
import { ChevronDownIcon } from "@chakra-ui/icons";

const DeliveryTab = () => {
  return (
    <TabPanel>
      <Flex
        maxW={"100%"}
        alignItems={"center"}
        m={"auto"}
        mb={"20px"}
        gap={"10px"}
        flexWrap={"wrap"}
      >
        <FilterModal />
        <Button variant={"outline"} cursor={"pointer"} color={"GrayText"}>
          Rating: 4.0+
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant={"outline"}
            color={"GrayText"}
          >
            Pure Veg
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant={"outline"}
            color={"GrayText"}
          >
            Cuisines
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant={"outline"}
            color={"GrayText"}
          >
            More Filters
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </TabPanel>
  );
};

export default DeliveryTab;
