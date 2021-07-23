import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Statistic = () => {
  return (
    <Container centerContent as="section" id="statistic" py="5rem">
      <Grid templateColumns="repeat(12,1fr)" gap="1.875rem">
        <GridItem colSpan={5} d="flex" flexDir="column">
          <Heading variant="heading-two">Our 18 years of achievements</Heading>
          <Text variant="lead-one" mt=".5rem">
            With our super powers we have reached this
          </Text>
        </GridItem>
        <GridItem
          colSpan={6}
          colEnd={13}
          d="grid"
          gridTemplateColumns="repeat(2,1fr)"
          gridColumnGap="30px"
          gridRowGap="40px"
        >
          <Box d="flex" alignItems="center">
            <Image
              src="/icons/workflow.svg"
              alt="Download Icons"
              boxSize="32px"
              mr="1rem"
            />
            <Flex flexDir="column">
              <Heading variant="heading-four">10,000+</Heading>
              <Text variant="body-one">Downloads per day</Text>
            </Flex>
          </Box>
          <Box d="flex" alignItems="center">
            <Image
              src="/icons/layout.svg"
              alt="Download Icons"
              boxSize="32px"
              mr="1rem"
            />
            <Flex flexDir="column">
              <Heading variant="heading-four">2 Million</Heading>
              <Text variant="body-one">Users</Text>
            </Flex>
          </Box>
          <Box d="flex" alignItems="center">
            <Image
              src="/icons/component.svg"
              alt="Download Icons"
              boxSize="32px"
              mr="1rem"
            />
            <Flex flexDir="column">
              <Heading variant="heading-four">500+</Heading>
              <Text variant="body-one">Clients</Text>
            </Flex>
          </Box>
          <Box d="flex" alignItems="center">
            <Image
              src="/icons/countries.svg"
              alt="Download Icons"
              boxSize="32px"
              mr="1rem"
            />
            <Flex flexDir="column">
              <Heading variant="heading-four">140</Heading>
              <Text variant="body-one">Countries</Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Statistic;
