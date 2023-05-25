import { Flex } from "@chakra-ui/react";
import React from "react";
import OptionCards from "./cards/OptionCards";

const Options = () => {
  const options = [
    {
      title: "Order Online",
      subTitle: "Stay home and order to your doorstep",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/order-online.webp?alt=media&token=c452919b-f46f-4533-87d2-a07f814c3ecf",
    },
    {
      title: "Dining",
      subTitle: "View the city's favourite dining venues",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/dining.webp?alt=media&token=4c7eb12d-20f4-4467-bbce-6cedfde9ec76",
    },
    {
      title: "Nightlife and Clubs",
      subTitle: "Explore the city's top nightlife outlets",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/night-life%26clubs.webp?alt=media&token=dc5cbe65-7d56-4d74-b111-fc0b15d9e8f0",
    },
  ];
  return (
    <Flex
      w={{ base: "100%", lg: "70%" }}
      h={{ base: "auto", lg: "250px" }}
      m={"auto"}
      mt={"10px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      {options.map((opt) => {
        return <OptionCards key={opt.title} {...opt} />;
      })}
    </Flex>
  );
};

export default Options;
