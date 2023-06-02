import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const Explore = () => {
  const data = [
    {
      title: "Popular cuisines near me",
      data: [
        "Bakery food near me",
        "Beverages food near me",
        "Biryani food near me",
        "Burger food near me",
        "Chinese food near me",
        "Desserts food near me",
        "Hyderabadi food near me",
        "Ice Cream food near me",
        "Kebab food near me",
        "Mithai food near me",
        "Mughlai food near me",
        "North Indian food near me",
        "Pizza food near me",
        "Roast Chicken food near me",
        "Rolls food near me",
        "Sandwich food near me",
        "Seafood food near me",
        "Shake food near me",
        "South Indian food near me",
        "Street food near me",
      ],
    },
    {
      title: "Popular restaurant types near me",
      data: [
        "Bakeries near me",
        "Bars near me",
        "Beverage Shops near me",
        "Bhojanalya near me",
        "Cafés near me",
        "Casual Dining near me",
        "Confectioneries near me",
        "Dessert Parlors near me",
        "Dhabas near me",
        "Fine Dining near me",
        "Food Courts near me",
        "Food Trucks near me",
        "Kiosks near me",
        "Quick Bites near me",
        "Sweet Shops near me",
      ],
    },
    {
      title: "Cities We Deliver To",
      data: [
        "Delhi NCR",
        "Kolkata",
        "Mumbai",
        "Bengaluru",
        "Pune",
        "Hyderabad",
        "Chennai",
        "Lucknow",
        "Kochi",
        "Jaipur",
        "Ahmedabad",
        "Chandigarh",
        "Goa",
        "Indore",
        "Gangtok",
        "Nashik",
        "Ooty",
        "Shimla",
        "Ludhiana",
        "Guwahati",
        "Amritsar",
        "Kanpur",
        "Allahabad",
        "Aurangabad",
        "Bhopal",
        "Ranchi",
        "Visakhapatnam",
        "Bhubaneswar",
        "Coimbatore",
        "Mangalore",
        "Vadodara",
        "Nagpur",
        "Agra",
        "Dehradun",
        "Mysore",
        "Puducherry",
        "Surat",
        "Varanasi",
        "Patna",
        "Udaipur",
        "Srinagar",
        "Khajuraho",
        "Neemrana",
        "Cuttack",
        "Trivandrum",
        "Haridwar",
        "Leh",
        "Pushkar",
        "Rajkot",
        "Madurai",
        "Kozhikode",
        "Alappuzha",
        "Thrissur",
        "Manipal",
        "Vijayawada",
        "Jodhpur",
        "Kota",
        "Ajmer",
        "Mussoorie",
        "Rishikesh",
        "Jalandhar",
        "Jammu",
        "Manali",
        "Dharamshala",
      ],
    },
  ];
  return (
    <Box w={{ base: "100%", lg: "70%" }} m={"auto"} mt={"50px"} mb={"20px"}>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        m={{ base: "auto", lg: "0" }}
        w={"fit-content"}
        fontWeight={500}
      >
        Explore options near me
      </Heading>
      <Accordion allowMultiple mt={"20px"}>
        {data.map((item, i) => {
          return (
            <AccordionItem
              key={i}
              mb={"20px"}
              border={"1px solid #e8e8e8"}
              minH={"60px"}
              _focus={{ bgColor: "white" }}
              _hover={{ bgColor: "white" }}
            >
              <h2>
                <AccordionButton
                  _focus={{ bgColor: "white" }}
                  _hover={{ bgColor: "white" }}
                  fontSize={"23px"}
                  color={"GrayText"}
                >
                  <Box as="span" flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Grid
                  w={"100%"}
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    sm: "repeat(2,1fr)",
                    md: "repeat(4,1fr)",
                    xl: "repeat(4,1fr)",
                  }}
                >
                  {item.data.map((item) => (
                    <UnorderedList key={item}>
                      <ListItem w={"fit-content"} mr={"20px"} color={"#b3b3b3"}>
                        {item}
                      </ListItem>
                    </UnorderedList>
                  ))}
                </Grid>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default Explore;
