import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CallToAction = () => {
  return (
    <Container centerContent as="section" id="call-to-action">
      <Grid templateColumns="repeat(12,1fr)" gap="30px" w="full">
        <GridItem colSpan={6} d="flex" flexDir="column">
          <Heading>Manage your projects from your mobile</Heading>
          <Text>
            Download the app to manage your projects, keep track of the progress
            and complete tasks without procastinating. Stay on track and
            complete on time!
          </Text>
          <Button>Gets Started</Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CallToAction;
