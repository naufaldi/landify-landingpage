import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
  Icon,
} from "@chakra-ui/react";
import React from "react";

const Quote = (props: any) => (
  <Icon
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.93 2.187C13.544 3.4 12.35 4.829 12.35 6.469c1.017.121 1.858.551 2.523 1.29.665.74.997 1.595.997 2.566 0 1.033-.322 1.904-.968 2.612-.645.709-1.457 1.063-2.435 1.063-1.095 0-2.043-.46-2.845-1.382-.802-.921-1.203-2.04-1.203-3.356 0-3.947 2.132-7.035 6.395-9.262l1.115 2.187zm-8.42 0C5.104 3.4 3.902 4.829 3.902 6.469c1.036.121 1.887.551 2.552 1.29.665.74.997 1.595.997 2.566 0 1.033-.327 1.904-.983 2.612C5.813 13.646 4.997 14 4.018 14c-1.094 0-2.038-.46-2.83-1.382C.396 11.697 0 10.578 0 9.262 0 5.315 2.122 2.227 6.366 0L7.51 2.187z"
      fill="#2EC5CE"
    />
  </Icon>
);

const Testimoni = () => {
  return (
    <Box w="full" bg="hsla(33, 100%, 91%, 1)" py="5rem">
      <Container centerContent as="section" id="testimoni">
        <Grid
          templateColumns="repeat(12,1fr)"
          templateRows="repeat(3,auto)"
          gap="30px"
          position="relative"
        >
          <Image
            src="/pattern/quotes.svg"
            w="143px"
            h="120px"
            alt="Quotes Mark"
            position="absolute"
          />
          <GridItem colSpan={5} colStart={2}>
            <Heading variant="heading-two">
              Real Stories from Real Customers
            </Heading>
            <Text variant="lead-one" mt="8px">
              Get inspired by these stories.
            </Text>
          </GridItem>
          <GridItem colSpan={5} colStart={7} rowSpan={2}>
            <Box
              bg="white"
              p="32px"
              d="flex"
              alignItems="flex-start"
              flexDir="column"
              boxShadow="0px 10px 20px rgba(41, 41, 42, 0.07)"
              borderRadius="8px"
            >
              <Image
                src="/client/airbnb-logo.svg"
                h="2.5rem"
                alt="Airbnb Logo"
              />
              <Flex mt="2rem">
                <Quote boxSize="14px" mr="1rem" />
                <Flex flexDir="column">
                  <Text variant="lead-one">
                    I used landify and created a landing page for my startup
                    within a week. The Landify UI Kit is simple and highly
                    intuitive, so anyone can use it.
                  </Text>
                  <Text mt="1.5rem" variant="subtitle-one">
                    Jane Cooper
                  </Text>
                  <Text color="gray.700" variant="lead-two">
                    CEO, Airbnb
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </GridItem>
          <GridItem colSpan={4} colStart={3} rowSpan={2} rowStart={2}>
            <Box
              bg="white"
              p="32px"
              d="flex"
              alignItems="flex-start"
              flexDir="column"
              boxShadow="0px 10px 20px rgba(41, 41, 42, 0.07)"
              borderRadius="8px"
            >
              <Image
                src="/client/hubspot-logo.svg"
                h="2.5rem"
                alt="Airbnb Logo"
              />
              <Flex mt="2rem">
                <Quote boxSize="14px" mr="1rem" />
                <Flex flexDir="column">
                  <Text variant="lead-one">
                    To quickly start my startup landing page design, I was
                    looking for a landing page UI Kit. Landify is one of the
                    best landing page UI kit I have come across. It’s so
                    flexible, well organised and easily editable.
                  </Text>
                  <Text mt="1.5rem" variant="subtitle-one">
                    Floyd Miles
                  </Text>
                  <Text color="gray.700" variant="lead-two">
                    Vice President, GoPro
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </GridItem>
          <GridItem colSpan={4} colStar={7} rowSpan={1} rowStart={3}>
            <Box
              bg="white"
              p="32px"
              d="flex"
              alignItems="flex-start"
              flexDir="column"
              boxShadow="0px 10px 20px rgba(41, 41, 42, 0.07)"
              borderRadius="8px"
            >
              <Image
                src="/client/microsoft-logo.svg"
                h="2.5rem"
                alt="Airbnb Logo"
              />
              <Flex mt="2rem">
                <Quote boxSize="14px" mr="1rem" />
                <Flex flexDir="column">
                  <Text variant="lead-one">
                    Landify saved our time in designing my company page.
                  </Text>
                  <Text mt="1.5rem" variant="subtitle-one">
                    Kristin Watson
                  </Text>
                  <Text color="gray.700" variant="lead-two">
                    Co-Founder, BookMyShow
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimoni;
