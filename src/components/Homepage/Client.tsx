import { Box, Container, Divider, Flex, HStack } from "@chakra-ui/react";
import React from "react";

const Client = () => {
  return (
    <Container centerContent as="section" mt="148px" py="16px">
      <Flex flexDir="column" w="full">
        <Divider
          background="linear-gradient(90deg, rgba(192, 204, 218, 0.1) 0%, rgba(192, 204, 218, 0.6) 50.38%, rgba(192, 204, 218, 0.1) 100%)"
          h="1px"
        />
        <HStack spacing="64px" mx="auto" py="16px" my="25px">
          <Box>Amazon</Box>
          <Box>Amazon</Box>
          <Box>Amazon</Box>
          <Box>Amazon</Box>
          <Box>Amazon</Box>
        </HStack>
        <Divider
          background="linear-gradient(90deg, rgba(192, 204, 218, 0.1) 0%, rgba(192, 204, 218, 0.6) 50.38%, rgba(192, 204, 218, 0.1) 100%)"
          h="1px"
        />
      </Flex>
    </Container>
  );
};

export default Client;
