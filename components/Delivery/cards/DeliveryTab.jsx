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
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { removeFilter } from "@/redux/slices/PlacesSlice";

const DeliveryTab = () => {
  const { ActiveFilters } = useSelector((state) => state.placeReducer);
  const dispatch = useDispatch();
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
        {ActiveFilters?.map((filter, i) => {
          return (
            <Button
              key={i}
              cursor={"pointer"}
              color={"white"}
              bg={"red.400"}
              rightIcon={
                <RxCross1
                  onClick={() => {
                    dispatch(removeFilter(i));
                  }}
                />
              }
            >
              {filter}
            </Button>
          );
        })}
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
        </Menu>
      </Flex>
    </TabPanel>
  );
};

export default DeliveryTab;
