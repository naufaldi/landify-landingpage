import {
  Container,
  Grid,
  Text,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";

const Feature = () => {
  return (
    <Container centerContent as="section" id="feature" py="4rem">
      <Grid templateColumns="repeat(12,1fr)" gap={6}>
        <GridItem
          colSpan={6}
          colStart={4}
          d="flex"
          flexDir="column"
          textAlign="center"
        >
          <Heading variant="heading-two" color="gray.900">
            Tailor-made features
          </Heading>
          <Text mt="8px" variant="lead-one">
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </Text>
        </GridItem>
        <GridItem
          colSpan={12}
          d="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gridColumnGap="30px"
          gridRowGap="64px"
        >
          <GridItem
            colSpan={1}
            d="flex"
            flexDir="column"
            alignItems="center"
            textAlign="center"
          >
            <Image
              src="/icons/workflow.svg"
              boxSize="32px"
              alt="Icon Workflow"
            />
            <Heading variant="heading-five" mt="24px">
              Robust workflow
            </Heading>
            <Text variant="body-one" mt="8px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </Text>
          </GridItem>
          <GridItem
            colSpan={1}
            d="flex"
            flexDir="column"
            alignItems="center"
            textAlign="center"
          >
            <Image
              src="/icons/flexibility.svg"
              boxSize="32px"
              alt="Icon Workflow"
            />
            <Heading variant="heading-five" mt="24px">
              Flexibility
            </Heading>
            <Text variant="body-one" mt="8px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </Text>
          </GridItem>
          <GridItem
            colSpan={1}
            d="flex"
            flexDir="column"
            alignItems="center"
            textAlign="center"
          >
            <Image
              src="/icons/friendly.svg"
              boxSize="32px"
              alt="Icon Workflow"
            />
            <Heading variant="heading-five" mt="24px">
              User friendly
            </Heading>
            <Text variant="body-one" mt="8px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </Text>
          </GridItem>
          <GridItem
            colSpan={1}
            d="flex"
            flexDir="column"
            alignItems="center"
            textAlign="center"
          >
            <Image src="/icons/layout.svg" boxSize="32px" alt="Icon Workflow" />
            <Heading variant="heading-five" mt="24px">
              Multiple layouts
            </Heading>
            <Text variant="body-one" mt="8px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </Text>
          </GridItem>
          <GridItem
            colSpan={1}
            d="flex"
            flexDir="column"
            alignItems="center"
            textAlign="center"
          >
            <Image
              src="/icons/component.svg"
              boxSize="32px"
              alt="Icon Workflow"
            />
            <Heading variant="heading-five" mt="24px">
              Better components
            </Heading>
            <Text variant="body-one" mt="8px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </Text>
          </GridItem>
          <GridItem
            colSpan={1}
            d="flex"
            flexDir="column"
            alignItems="center"
            textAlign="center"
          >
            <Image
              src="/icons/organized.svg"
              boxSize="32px"
              alt="Icon Workflow"
            />
            <Heading variant="heading-five" mt="24px">
              Well organised
            </Heading>
            <Text variant="body-one" mt="8px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </Text>
          </GridItem>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Feature;
