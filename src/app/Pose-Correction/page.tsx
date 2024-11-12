/*


"use client";

import { useState } from 'react';
import { Stack, Flex, Box, Heading, Text, Button, Select, chakra } from '@chakra-ui/react';
import axios from 'axios';

const HomePageContent = () => {
  const [selectedPose, setSelectedPose] = useState<string>('select');
  const [output, setOutput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [running, setRunning] = useState<boolean>(false);

  const handlePoseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPose(event.target.value);
  };

  const handleStartClick = async () => {
    setLoading(true);
    setOutput('');
    try {
      const response = await axios.post('http://localhost:8080/run_script', new URLSearchParams({ pose: selectedPose }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data.message) {
        setOutput(response.data.message);
        setRunning(true);
      }
    } catch (error) {
      setOutput('An error occurred while executing the script.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStopClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/stop_script', {}, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data.message) {
        setOutput(response.data.message);
        setRunning(false);
      }
    } catch (error) {
      setOutput('An error occurred while stopping the script.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      bg="#f0f8ff"
    >
      <Box
        background="white"
        borderRadius="8px"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
        padding="20px"
        maxWidth="400px"
        width="100%"
      >
        <Stack spacing={4} align="center">
          <Heading as="h1" size="lg">Yoga Pose Viewer</Heading>
          <Box width="100%">
            <Text as="label" fontWeight="bold" display="block" marginBottom="10px">
              Select Yoga Pose:
            </Text>
            <Select value={selectedPose} onChange={handlePoseChange}>
              <option value="select">Select</option>
              <option value="warrior">Warrior Pose</option>
              <option value="tpose">T Pose</option>
              <option value="mountain">Mountain Pose</option>
              <option value="tree">Tree Pose</option>
              <option value="downwarddog">Downward Dog Pose</option>
            </Select>
          </Box>
          <Box width="100%" marginBottom="20px">
            <Box
              padding="10px"
              background="#e6f7ff"
              border="1px solid #b3e0ff"
              borderRadius="4px"
              width="100%"
              boxSizing="border-box"
            >
              {selectedPose === 'warrior' && (
                <>
                  <Heading as="h2" size="md">Warrior Pose</Heading>
                  <Text>The Warrior Pose is a powerful stance that strengthens the legs, opens the hips, and improves balance. It involves a wide stance, a bent front knee, and extended arms. This pose enhances focus, stamina, and confidence.</Text>
                </>
              )}
              {selectedPose === 'tpose' && (
                <>
                  <Heading as="h2" size="md">T Pose</Heading>
                  <Text>The T Pose helps to improve posture, balance, and overall body awareness. It involves standing tall with arms extended to the sides, forming a 'T' shape.</Text>
                </>
              )}
              {selectedPose === 'mountain' && (
                <>
                  <Heading as="h2" size="md">Mountain Pose</Heading>
                  <Text>The Mountain Pose is a foundational yoga pose that promotes stability and grounding. It involves standing tall with feet together and arms by the sides, focusing on even weight distribution and alignment.</Text>
                </>
              )}
              {selectedPose === 'tree' && (
                <>
                  <Heading as="h2" size="md">Tree Pose</Heading>
                  <Text>The Tree Pose is a balancing posture that strengthens the legs and core while improving focus and concentration. It involves standing on one leg with the other foot placed on the inner thigh, and hands brought together in prayer position.</Text>
                </>
              )}
              {selectedPose === 'downwarddog' && (
                <>
                  <Heading as="h2" size="md">Downward Dog Pose</Heading>
                  <Text>The Downward Dog Pose is a rejuvenating pose that stretches the entire body. It involves forming an inverted 'V' shape with the body, hands and feet pressed into the mat, and hips lifted high.</Text>
                </>
              )}
            </Box>
          </Box>
          <Button
            onClick={handleStartClick}
            isLoading={loading}
            colorScheme="blue"
            display={selectedPose !== 'select' && !running ? 'block' : 'none'}
          >
            Start
          </Button>
          <Button
            onClick={handleStopClick}
            isLoading={loading}
            colorScheme="red"
            display={running ? 'block' : 'none'}
          >
            Stop
          </Button>
          {output && (
            <Box marginTop="20px" padding="10px" background="#f8f9fa" borderRadius="4px">
              <Text>{output}</Text>
            </Box>
          )}
        </Stack>
      </Box>
    </Flex>
  );
};

export default HomePageContent;

*/




"use client";

import { useState } from 'react';
import { Stack, Flex, Box, Heading, Text, Button, Select, chakra, useBreakpointValue } from '@chakra-ui/react';
import axios from 'axios';

const HomePageContent = () => {
  const [selectedPose, setSelectedPose] = useState<string>('select');
  const [output, setOutput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [running, setRunning] = useState<boolean>(false);

  const handlePoseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPose(event.target.value);
  };

  const handleStartClick = async () => {
    setLoading(true);
    setOutput('');
    try {
      const response = await axios.post('http://localhost:8080/run_script', new URLSearchParams({ pose: selectedPose }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data.message) {
        setOutput(response.data.message);
        setRunning(true);
      }
    } catch (error) {
      setOutput('An error occurred while executing the script.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStopClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/stop_script', {}, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data.message) {
        setOutput(response.data.message);
        setRunning(false);
      }
    } catch (error) {
      setOutput('An error occurred while stopping the script.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      bgImage={{
        base: 'none',
        md: 'url(/Images/pattern-bg.jpg)',  // Update the path to your background image
      }}
      bgSize="cover"
      bgPosition="center"
      p={8}
    >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'} position="relative">
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={'green.700'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.600',
                zIndex: -1,
              }}
            >
              Yoga Pose Viewer
            </Text>
          </Heading>
          <Box bg="white" borderRadius="8px" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" p={6}>
            <Stack spacing={4} align="center">
            <Box width="100%">
  <Text as="label" fontWeight="bold" display="block" marginBottom="10px">
    Select Yoga Pose:
  </Text>
  <Select value={selectedPose} onChange={handlePoseChange}>
    <option value="select">Select</option>
    <option value="warrior">Warrior Pose</option>
    <option value="tpose">T Pose</option>
    <option value="upwardplank">Upward Plank Pose</option>
    <option value="tree">Tree Pose</option>
    <option value="goddess">Goddess Pose</option>
    <option value="birddog">Bird Dog Pose</option>
  </Select>
</Box>
<Box width="100%" marginBottom="20px">
  <Box
    padding="10px"
    background="#e6f7ff"
    border="1px solid #b3e0ff"
    borderRadius="4px"
    width="100%"
    boxSizing="border-box"
  >
    {selectedPose === 'warrior' && (
      <>
        <Heading as="h2" size="md">Warrior Pose</Heading>
        <Text>The Warrior Pose is a powerful stance that strengthens the legs, opens the hips, and improves balance. It involves a wide stance, a bent front knee, and extended arms. This pose enhances focus, stamina, and confidence.</Text>
      </>
    )}
    {selectedPose === 'tpose' && (
      <>
        <Heading as="h2" size="md">T Pose</Heading>
        <Text>The T Pose helps to improve posture, balance, and overall body awareness. It involves standing tall with arms extended to the sides, forming a 'T' shape.</Text>
      </>
    )}
    {selectedPose === 'upwardplank' && (
      <>
        <Heading as="h2" size="md">Upward Plank Pose</Heading>
        <Text>The Upward Plank Pose strengthens the arms, wrists, and legs while stretching the shoulders, chest, and front ankles. It involves sitting with legs extended, placing the hands behind the hips, and lifting the body to form a straight line from head to heels.</Text>
      </>
    )}
    {selectedPose === 'tree' && (
      <>
        <Heading as="h2" size="md">Tree Pose</Heading>
        <Text>The Tree Pose is a balancing posture that strengthens the legs and core while improving focus and concentration. It involves standing on one leg with the other foot placed on the inner thigh, and hands brought together in prayer position.</Text>
      </>
    )}
    {selectedPose === 'goddess' && (
      <>
        <Heading as="h2" size="md">Goddess Pose</Heading>
        <Text>The Goddess Pose is a powerful yoga pose that strengthens the lower body, opens the hips, and promotes inner strength. It involves standing with feet wide apart, toes pointed outward, and sinking into a deep squat while keeping the spine upright and arms extended or at the heart center.</Text>
      </>
    )}
    {selectedPose === 'birddog' && (
      <>
        <Heading as="h2" size="md">Bird Dog Pose</Heading>
        <Text>The Bird Dog Pose is a balancing pose that strengthens the core, improves stability, and promotes proper posture. It involves starting on hands and knees, then extending one arm forward and the opposite leg back, keeping the body in a straight line.</Text>
      </>
    )}
  </Box>
</Box>


              <Button
                onClick={handleStartClick}
                isLoading={loading}
                colorScheme="blue"
                display={selectedPose !== 'select' && !running ? 'block' : 'none'}
              >
                Start
              </Button>
              <Button
                onClick={handleStopClick}
                isLoading={loading}
                colorScheme="red"
                display={running ? 'block' : 'none'}
              >
                Stop
              </Button>
              {output && (
                <Box marginTop="20px" padding="10px" background="#f8f9fa" borderRadius="4px">
                  <Text>{output}</Text>
                </Box>
              )}
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1} position="relative">
        <chakra.img
          alt={'Yoga Pose'}
          objectFit={'cover'}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          w={'100%'}
          h={'100%'}
          src={'/Images/correct-bg.png'}  // Update the path to your banner image
        />
      </Flex>
    </Stack>
  );
};

export default HomePageContent;


/*
"use client"; // Add this at the top

import { useState } from 'react';
import { Stack, Flex, Box, Heading, Text, Button, Select, chakra, useBreakpointValue } from '@chakra-ui/react';
import axios from 'axios';

const HomePageContent = () => {
  const [selectedPose, setSelectedPose] = useState<string>('select');
  const [output, setOutput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [running, setRunning] = useState<boolean>(false);

  const handlePoseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPose(event.target.value);
  };

  const handleStartClick = async () => {
    setLoading(true);
    setOutput('');
    try {
      const response = await axios.post('http://localhost:8080/run_script', new URLSearchParams({ pose: selectedPose }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data.message) {
        setOutput(response.data.message);
        setRunning(true);
      }
    } catch (error) {
      setOutput('An error occurred while executing the script.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStopClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/stop_script', {}, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data.message) {
        setOutput(response.data.message);
        setRunning(false);
      }
    } catch (error) {
      setOutput('An error occurred while stopping the script.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Define a function to generate the image path based on selected pose
  const getPoseImagePath = (pose: string) => `/Images/${pose}.jpg`;

  return (
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      bgImage={{
        base: 'none',
        md: 'url(/Images/pattern-bg.jpg)',  // Update the path to your background image
      }}
      bgSize="cover"
      bgPosition="center"
      p={8}
    >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'} position="relative">
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={'green.700'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.600',
                zIndex: -1,
              }}
            >
              Yoga Pose Viewer
            </Text>
          </Heading>
          <Box bg="white" borderRadius="8px" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" p={6}>
            <Stack spacing={4} align="center">
              <Box width="100%">
                <Text as="label" fontWeight="bold" display="block" marginBottom="10px">
                  Select Yoga Pose:
                </Text>
                <Select value={selectedPose} onChange={handlePoseChange}>
                  <option value="select">Select</option>
                  <option value="warrior">Warrior Pose</option>
                  <option value="tpose">T Pose</option>
                  <option value="mountain">Mountain Pose</option>
                  <option value="tree">Tree Pose</option>
                  <option value="downwarddog">Downward Dog Pose</option>
                </Select>
              </Box>
              <Box width="100%" marginBottom="20px">
                <Box
                  padding="10px"
                  background="#e6f7ff"
                  border="1px solid #b3e0ff"
                  borderRadius="4px"
                  width="100%"
                  boxSizing="border-box"
                >
                  {selectedPose === 'warrior' && (
                    <>
                      <Heading as="h2" size="md">Warrior Pose</Heading>
                      <Text>The Warrior Pose is a powerful stance that strengthens the legs, opens the hips, and improves balance. It involves a wide stance, a bent front knee, and extended arms. This pose enhances focus, stamina, and confidence.</Text>
                    </>
                  )}
                  {selectedPose === 'tpose' && (
                    <>
                      <Heading as="h2" size="md">T Pose</Heading>
                      <Text>The T Pose helps to improve posture, balance, and overall body awareness. It involves standing tall with arms extended to the sides, forming a 'T' shape.</Text>
                    </>
                  )}
                  {selectedPose === 'mountain' && (
                    <>
                      <Heading as="h2" size="md">Mountain Pose</Heading>
                      <Text>The Mountain Pose is a foundational yoga pose that promotes stability and grounding. It involves standing tall with feet together and arms by the sides, focusing on even weight distribution and alignment.</Text>
                    </>
                  )}
                  {selectedPose === 'tree' && (
                    <>
                      <Heading as="h2" size="md">Tree Pose</Heading>
                      <Text>The Tree Pose is a balancing posture that strengthens the legs and core while improving focus and concentration. It involves standing on one leg with the other foot placed on the inner thigh, and hands brought together in prayer position.</Text>
                    </>
                  )}
                  {selectedPose === 'downwarddog' && (
                    <>
                      <Heading as="h2" size="md">Downward Dog Pose</Heading>
                      <Text>The Downward Dog Pose is a rejuvenating pose that stretches the entire body. It involves forming an inverted 'V' shape with the body, hands and feet pressed into the mat, and hips lifted high.</Text>
                    </>
                  )}
                </Box>
              </Box>
              <Button
                onClick={handleStartClick}
                isLoading={loading}
                colorScheme="blue"
                display={selectedPose !== 'select' && !running ? 'block' : 'none'}
              >
                Start
              </Button>
              <Button
                onClick={handleStopClick}
                isLoading={loading}
                colorScheme="red"
                display={running ? 'block' : 'none'}
              >
                Stop
              </Button>
              {output && (
                <Box marginTop="20px" padding="10px" background="#f8f9fa" borderRadius="4px">
                  <Text>{output}</Text>
                </Box>
              )}
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1} position="relative">
        {selectedPose !== 'select' && (
          <chakra.img
            alt={'Yoga Pose'}
            objectFit={'cover'}
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            w={'100%'}
            h={'100%'}
            src={getPoseImagePath(selectedPose)}  // Dynamically change image source based on selected pose
          />
        )}
      </Flex>
    </Stack>
  );
};

export default HomePageContent;


*/