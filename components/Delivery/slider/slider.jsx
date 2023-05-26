import { Flex, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import SliderCard from "../cards/SliderCard";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const sliderDetails = [
    {
      title: "Biryani",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2Fd19a31d42d5913ff129cafd7cec772f81639737697.webp?alt=media&token=9e24b947-5a33-4d17-a1b0-9ab7594361f1",
    },
    {
      title: "Pizza",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2Fd0bd7c9405ac87f6aa65e31fe55800941632716575.webp?alt=media&token=600e9a21-e973-45ab-92e9-b28ac7fdba99",
    },
    {
      title: "Burger",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2Fccb7dc2ba2b054419f805da7f05704471634886169.webp?alt=media&token=da46736f-a679-4010-8c52-c69a01f30a9d",
    },
    {
      title: "Fried Rice",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2Fe444ade83eb22360b6ca79e6e777955f1632716661.webp?alt=media&token=6ef3c6e9-61b8-4c5b-89af-be5be46e0a1f",
    },
    {
      title: "Chicken",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2F197987b7ebcd1ee08f8c25ea4e77e20f1634731334.webp?alt=media&token=fb30e395-277b-4107-9340-3a4de327eb96",
    },
    {
      title: "Sandwich",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2Ffc641efbb73b10484257f295ef0b9b981634401116.webp?alt=media&token=e37cc402-ddd6-4f56-bb77-1536c1bb6c68",
    },
    {
      title: "Thali",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2F52eb9796bb9bcf0eba64c643349e97211634401116.webp?alt=media&token=baec8e10-14d0-43fd-9c0a-568b7509fafc",
    },
    {
      title: "Momos",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2F5dbdb72a48cf3192830232f6853735301632716604.webp?alt=media&token=b34f8ce4-131f-49d0-8853-77b71b20a3d3",
    },
    {
      title: "Rolls",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2Fc2f22c42f7ba90d81440a88449f4e5891634806087.webp?alt=media&token=73353e63-057f-496d-88dd-c6782d387768",
    },
    {
      title: "Cake",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2Fd5ab931c8c239271de45e1c159af94311634805744.webp?alt=media&token=08ee35df-0d85-44d5-94ac-2e1b97f5eaa2",
    },
    {
      title: "Paneer",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2Fe44c42ff4b60b025225c8691ef9735b11635781903.webp?alt=media&token=de6e3094-dbef-49c6-9657-638c151c588b",
    },
    {
      title: "Dosa",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/slider%2F8dc39742916ddc369ebeb91928391b931632716660.webp?alt=media&token=361de138-0ad1-4c12-88c3-7db93b220e14",
    },
  ];
  return (
    <Flex alignItems="center" gap={0} overflow="hidden" position="relative">
      <IconButton
        bg={"white"}
        position={"absolute"}
        icon={<AiOutlineLeft />}
        top={{
          base: 10,
          md: 12,
        }}
        left={0}
        zIndex={5}
        rounded={"50%"}
        onClick={() => setIndex(index !== 0 ? index - 1 : 2)}
        border={"1px solid"}
      />
      <Flex
        w={"95%"}
        m={"auto"}
        alignItems={"center"}
        gap={{
          base: 10,
          lg: 20,
        }}
        transition="transform 0.5s ease-in-out"
        transform={`translateX(${-55 * index}vw)`}
      >
        {sliderDetails.map((details) => (
          <SliderCard key={details.imgURL} {...details} />
        ))}
      </Flex>
      <IconButton
        bg={"white"}
        position={"absolute"}
        top={{
          base: 10,
          md: 12,
        }}
        right={0}
        rounded={"50%"}
        zIndex={5}
        icon={<AiOutlineRight />}
        onClick={() => setIndex(index !== 2 ? index + 1 : 0)}
        border={"1px solid"}
      />
    </Flex>
  );
};

export default Slider;
