'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Center
} from '@chakra-ui/react'
import { FaPlayCircle } from 'react-icons/fa'

interface CardProps {
  heading: string
  description: string
  image: string // Assuming the image prop will be a URL
  href: string
}

interface PoseDescriptions {
  [key: string]: string;
}

const Card = ({ heading, description, image, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      p={5}
      bg="white.100" // Background color
    >
      <Stack align={'start'} spacing={2} padding-left={2}>
        <Box
          w="100%"
          h="200px"
          overflow="hidden"
          borderRadius="lg"
          position="relative"
          _hover={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            transform: 'scale(1.02)',
            transition: 'all 0.3s ease',
          }}
        >
          <Image
            src={image}
            alt={heading}
            objectFit="cover"
            w="100%"
            h="100%"
          />
          <Flex
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="4xl"
            cursor="pointer"
          >
            <FaPlayCircle />
          </Flex>
        </Box>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};


export default function gridListWith() {

  // Array of pose names and their descriptions
  const poses = [
    'Adho Mukha Svanasana',
    'Adho Mukha Vrksasana',
    'Alanasana',
    'Anjaneyasana',
    'Ardha Chandrasana',
    'Ardha Matsyendrasana',
    'Ardha Navasana',
    'Ardha Pincha Mayurasana',
    'Ashta Chandrasana',
    'Baddha Konasana',
    'Bakasana',
    'Balasana',
    'Bitilasana',
    'Camatkarasana',
    'Dhanurasana',
    'Eka Pada Rajakapotasana',
    'Garudasana',
    'Halasana',
    'Hanumanasana',
    'Malasana',
    'Marjaryasana',
  ];

  // Array of descriptions for the poses
  const poseDescriptions: PoseDescriptions = {
    'Adho Mukha Svanasana': 'Downward-Facing Dog Pose: This pose is a foundational yoga posture that stretches and strengthens the entire body, particularly the arms, shoulders, back, and legs.',
    'Adho Mukha Vrksasana': 'Handstand Pose: This advanced yoga pose involves balancing on the hands with the body fully inverted. It requires strength, balance, and focus.',
    'Alanasana': 'High Lunge Pose: This yoga pose stretches and strengthens the legs, hips, and torso while improving balance and stability.',
    'Anjaneyasana': 'Low Lunge Pose: This pose is a variation of the lunge that stretches the thighs, groin, and hips while also opening the chest and shoulders.',
    'Ardha Chandrasana': 'Half Moon Pose: This standing balance pose strengthens the legs, improves coordination, and stretches the sides of the body.',
    'Ardha Matsyendrasana': 'Half Lord of the Fishes Pose: This seated twist pose increases spinal mobility, stretches the back muscles, and improves digestion.',
    'Ardha Navasana': 'Half Boat Pose: This core-strengthening pose targets the abdominal muscles while also engaging the legs and hip flexors.',
    'Ardha Pincha Mayurasana': 'Dolphin Pose: This inversion pose strengthens the arms, shoulders, and core muscles while also stretching the hamstrings and calves.',
    'Ashta Chandrasana': 'High Lunge Crescent Pose: This variation of the high lunge stretches the hips, thighs, and torso while also improving balance and stability.',
    'Baddha Konasana': 'Bound Angle Pose: This seated pose opens the hips and groin while stretching the inner thighs and groins.',
    'Bakasana': 'Crow Pose: This arm balance pose strengthens the arms, wrists, and core muscles while also improving balance and focus.',
    'Balasana': 'Child\'s Pose: This resting pose stretches the back, hips, and thighs while promoting relaxation and stress relief.',
    'Bitilasana': 'Cow Pose: This gentle backbend pose stretches the spine, chest, and abdomen while also improving spinal flexibility and mobility.',
    'Camatkarasana': 'Wild Thing Pose: This heart-opening pose stretches the chest, shoulders, and hip flexors while also building strength and flexibility.',
    'Dhanurasana': 'Bow Pose: This backbend pose strengthens the back muscles, improves posture, and stretches the entire front of the body.',
    'Eka Pada Rajakapotasana': 'One-Legged King Pigeon Pose: This deep hip opener pose stretches the thighs, groins, and psoas muscles while also releasing tension in the hips and lower back.',
    'Garudasana': 'Eagle Pose: This balance pose improves concentration, strengthens the legs and ankles, and stretches the shoulders and upper back.',
    'Halasana': 'Plow Pose: This inversion pose stretches the spine and shoulders, calms the nervous system, and improves circulation.',
    'Hanumanasana': 'Monkey Pose (Splits): This intense hamstring and hip opener pose stretches the legs and groin while also improving flexibility and balance.',
    'Malasana': 'Garland Pose: This squatting pose stretches the ankles, groin, and lower back while also strengthening the legs and core muscles.',
    'Marjaryasana': 'Cat Pose: This gentle spinal flexion pose stretches the back and neck while also improving spinal mobility and relieving tension.',
  };

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} paddingLeft={70}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} color={'green'}>
          Pose Correction
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Select a Pose!!
        </Text>
      </Stack>

      <Center>
      <Container maxW={'5xl'} mt={12} paddingLeft={70}>
        <Flex justifyContent="center"  alignItems="center">
          <Flex flexWrap="wrap" gridGap={6}>
            {poses.map((pose, index) => (
              <Card
                key={index}
                heading={pose}
                image={`Images/PosePics/${pose}.jpg`} // Assuming images are named after the poses
                description={poseDescriptions[pose]}
                href={'#'}
              />
            ))}
          </Flex>
        </Flex>
      </Container>
      </Center>
    </Box>
  )
}
