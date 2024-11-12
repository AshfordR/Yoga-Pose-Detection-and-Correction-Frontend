/*

'use client'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { ChangeEvent, useState } from 'react';
  export default function Pose() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result;
          if (result !== null && typeof result === 'string') {
            setSelectedImage(result);
          }
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleUpload = () => {
      console.log('Upload logic goes here');
    };
  
    return (
      <Stack
        minH={'100vh'}
        direction={{ base: 'column', md: 'row' }}
        bgImage={{
          base: 'none',
          md: 'url(Images/pattern-bg.jpg)',
        }}
        bgSize="cover"
        bgPosition="center"
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
                Let's Classify
              </Text>
              <br />{' '}
              <Text color={'orange.400'} as={'span'}>
                Your Yoga Pose
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Upload a valid image of a yoga pose in JPEG, PNG, JPG format!!
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                as="label" // Use label to trigger file input
                htmlFor="fileInput" 
                rounded={'full'}
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'orange.500',
                }}
              >
                Upload Image
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  style={{ display: 'none' }} // Hide the input element
                  onChange={handleImageChange} // Handle file change
                />
              </Button>
              <Button
                rounded={'full'}
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'orange.500',
                }}
                onClick={handleUpload} // Handle upload
              >
                Upload
              </Button>
            </Stack>
            {selectedImage && (
              <Image
                alt={'Selected Image'}
                objectFit={'cover'}
                w={'full'}
                h={'auto'}
                src={selectedImage}
              />
            )}
          </Stack>
        </Flex>
        <Flex flex={1} position="relative">
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            w={'100%'}
            h={'100%'}
            src={'Images/banner-item1.png'}
          />
        </Flex>
      </Stack>
    );
  }
  
*/

