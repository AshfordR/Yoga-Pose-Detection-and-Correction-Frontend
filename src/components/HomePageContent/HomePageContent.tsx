import {
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    IconButton,
    Image
  } from '@chakra-ui/react'
export default function HomePageContent(){
    return(
        <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              <b>YOGA FIRST
              FITNESS ALWAYS</b>
          </Text>
            <br />
            <Text as={'span'} color={'red.400'} >
              use everywhere!
            </Text>
          </Heading>
          <Text color={'black.500'}>
          Welcome to Great Fitness, premier destination for yoga
          and fitness enthusiasts. Nestled in the vibrant heart of the city, we
          offer a sanctuary where mind, body, and spirit align.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
          <a href="/Pose-Correction">
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}
            >
              Pose Correction
              </Button>
            </a>
            <a href="/Pose-Detection">
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
            >
              Detect Pose
            </Button>
            </a>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={['200px', '300px', '400px']}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
          {/*<Image src="Images/Background.png" opacity={0.6} objectFit="cover" width="100%" height="100%" />
         */ } </Box>
        </Flex>
      </Stack>
    );
}





/*
// pages/index.js

import { Button } from '@chakra-ui/react';

const HomePage = () => {

  const handlePoseCorrectionClick = async () => {
    try {
      const response = await fetch('http://localhost:8080/run_script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log('Script executed successfully!');
      } else {
        console.error('Script execution failed.');
      }
    } catch (error) {
      console.error('An error occurred while executing the script:', error);
    }
  };

  return (
    <div>
      <h1>Next.js App</h1>
      <Button onClick={handlePoseCorrectionClick}>Run Script</Button>
    </div>
  );
};

export default HomePage;

*/