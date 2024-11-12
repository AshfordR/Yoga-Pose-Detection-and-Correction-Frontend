'use client'

import Navbar from '@/components/navbar/Navbar';
import { Flex, Box, SimpleGrid, Card, CardHeader, Heading, ChakraProvider, CardBody, Text, CardFooter, Button, Center, useBreakpointValue } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";

export default function Services() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "gray.100",
          margin: 0,
          padding: 0,
        },
      },
    },
  });

  const centerHeading = useBreakpointValue({ base: true, md: false });

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" height="100vh" margin="0" padding="0">
        <Box bg="#CECABE" margin="0" padding="0">
          <Navbar />
          <Box>
            <Heading
              position="absolute"
              top={{ base: "4rem", md: "6rem" }}
              left="1rem"
              color="black"
              zIndex="1"
            >
              Our Services
            </Heading>
          </Box>
          <Center mt={{ base: "6rem", md: "10rem" }}>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} maxW="1200px">
              <Box
                bgImage="url('/Images/SignIn.png')"
                bgSize="cover"
                bgPos="center"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                position="relative"
                p={4}
                height="300px" // Adjust the height as needed
                width="250px" // Adjust the width as needed
              >
                <Box
                  bg="rgba(255, 255, 255, 0.7)"
                  borderRadius="md"
                  p={4}
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Card borderRadius="md" borderWidth="1px" bg="transparent">
                    <CardHeader>
                      <Heading size='md'>Pose Detection</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                      <Button colorScheme="cyan"><a href='/Pose-Detection'>View here</a></Button>
                    </CardFooter>
                  </Card>
                </Box>
              </Box>

              <Box
                bgImage="url('/Images/SignIn.png')"
                bgSize="cover"
                bgPos="center"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                position="relative"
                p={4}
                height="300px" // Adjust the height as needed
                width="250px" // Adjust the width as needed
              >
                <Box
                  bg="rgba(255, 255, 255, 0.7)"
                  borderRadius="md"
                  p={4}
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Card borderRadius="md" borderWidth="1px" bg="transparent">
                    <CardHeader>
                      <Heading size='md'>Pose Correction</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                      <Button colorScheme="cyan"><a href='/Pose-Correction'>View here</a></Button>
                    </CardFooter>
                  </Card>
                </Box>
              </Box>

              <Box
                bgImage="url('/Images/SignIn.png')"
                bgSize="cover"
                bgPos="center"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                position="relative"
                p={4}
                height="300px" // Adjust the height as needed
                width="250px" // Adjust the width as needed
              >
                <Box
                  bg="rgba(255, 255, 255, 0.7)"
                  borderRadius="md"
                  p={4}
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Card borderRadius="md" borderWidth="1px" bg="transparent">
                    <CardHeader>
                      <Heading size='md'>Free Lessons</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                      <Button colorScheme="cyan"><a href='/'>View here</a></Button>
                    </CardFooter>
                  </Card>
                </Box>
              </Box>

              <Box
                bgImage="url('/Images/SignIn.png')"
                bgSize="cover"
                bgPos="center"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                position="relative"
                p={4}
                height="300px" // Adjust the height as needed
                width="250px" // Adjust the width as needed
              >
                <Box
                  bg="rgba(255, 255, 255, 0.7)"
                  borderRadius="md"
                  p={4}
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Card borderRadius="md" borderWidth="1px" bg="transparent">
                    <CardHeader>
                      <Heading size='md'>Real Time Detection</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                      <Button colorScheme="cyan"><a href='/Pose-Detection'>View here</a></Button>
                    </CardFooter>
                  </Card>
                </Box>
              </Box>
            </SimpleGrid>
          </Center>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
