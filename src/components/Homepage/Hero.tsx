import React from "react";
import {
  Container,
  Button,
  Text,
  Grid,
  Box,
  GridItem,
  Heading,
  Image as ImageChakra,
} from "@chakra-ui/react";
import Image from "next/image";
import Image3d from "@/public/content/house-3d.png";

const OrangeCircle = (props: any) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36" cy="36" r="36" fill="#FFC278" />
  </svg>
);

const Hero = () => {
  return (
    <Container
      centerContent
      pt="110px"
      as="section"
      id="hero"
      position="relative"
    >
      <ImageChakra
        src="/pattern/circle-hero.svg"
        alt="Pattern"
        position="absolute"
        top="0"
        right="-15%"
      />
      <Grid templateColumns="repeat(12,1fr)" gap="30px" mt="110px">
        <GridItem colSpan={6} d="flex" flexDir="column" alignItems="flex-start">
          <Heading variant="heading-one">3D Studio Artist</Heading>
          <Text variant="lead-one" color="grey.900" mt="1rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </Text>
          <Button
            bg="redvio.500"
            borderRadius="6px"
            color="white"
            mt="32px"
            px="2rem"
            py="12px"
            lineHeight="24px"
            fontWeight="500"
            h="auto"
          >
            Get Started
          </Button>
        </GridItem>
        <GridItem colSpan={6} position="relative" mr="-0.5rem">
          <Box ml="1rem">
            <Image
              src={Image3d}
              height={497}
              width={532}
              layout="responsive"
              quality={100}
              alt="Image 3D"
              placeholder="blur"
            />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Hero;
