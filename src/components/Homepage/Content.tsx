import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import PlaneImage from "@/public/content/plane.png";

const ArrowRight = (props: any) => (
  <Icon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L19.586 13H2.011A1.006 1.006 0 011 12c0-.552.453-1 1.011-1h17.575l-4.293-4.293z"
      fill="#D9186A"
    />
  </Icon>
);
const Content = () => {
  return (
    <Container centerContent py="4rem" as="section" id="content">
      <Grid templateColumns="repeat(12,1fr)">
        <GridItem colSpan={6} ml="-3rem" pr="3rem">
          <Image
            src={PlaneImage}
            alt="Plane Video"
            width={524}
            height={489}
            layout="responsive"
            placeholder="blur"
            quality={100}
          />
        </GridItem>
        <GridItem
          colSpan={6}
          d="flex"
          flexDir="column"
          alignItems="flex-start"
          px="3rem"
        >
          <Heading variant="heading-three"> 3D Animasi</Heading>
          <Text varian="lead-one" mt="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
            egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non.
            Non commodo volutpat, pharetra, vel.
          </Text>
          <Button
            mt="32px"
            bg="transparent"
            p="0"
            lineHeight="24px"
            fontSize="16px"
            fontWeight="500"
            h="auto"
            _hover={{ opacity: 0.8 }}
          >
            Get started <ArrowRight boxSize="1.5rem" ml=".5rem" />{" "}
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Content;
