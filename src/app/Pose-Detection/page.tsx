/*
'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

export default function Home() {
    const [confidence, setConfidence] = useState('0.75');
    const [sourceType, setSourceType] = useState('camera');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInference = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/run_inference', { confidence });
            setMessage(response.data.message);
            setError('');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || 'An error occurred');
            } else {
                setError('An unknown error occurred');
            }
            setMessage('');
        }
    };

    const handleInferenceSource = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('confidence', confidence);
        formData.append('source_type', sourceType);
        if (sourceType === 'image' && imageFile) {
            formData.append('image_file', imageFile);
        }

        try {
            const response = await axios.post('http://localhost:8080/api/run_inference_source', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage(response.data.message);
            setError('');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || 'An error occurred');
            } else {
                setError('An unknown error occurred');
            }
            setMessage('');
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImageFile(e.target.files[0]);
        }
    };

    return (
        <div>
            <h1>Pose Inference</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p>{message}</p>}

            <form onSubmit={handleInference}>
                <label htmlFor="confidence">Confidence Threshold (0-1):</label>
                <input type="text" id="confidence" value={confidence} onChange={(e) => setConfidence(e.target.value)} /><br /><br />
                <button type="submit">Run Inference with Camera</button>
            </form>

            <hr />

            <form onSubmit={handleInferenceSource} encType="multipart/form-data">
                <label htmlFor="source_type">Source Type:</label>
                <select id="source_type" value={sourceType} onChange={(e) => setSourceType(e.target.value)}>
                    <option value="image">Image</option>
                    <option value="camera">Camera</option>
                </select><br /><br />
                {sourceType === 'image' && (
                    <>
                        <label htmlFor="image_file">Upload Image:</label>
                        <input type="file" id="image_file" accept="image/*" onChange={handleFileChange} required /><br /><br />
                    </>
                )}
                <label htmlFor="confidence_source">Confidence Threshold (0-1):</label>
                <input type="text" id="confidence_source" value={confidence} onChange={(e) => setConfidence(e.target.value)} /><br /><br />
                <button type="submit">Run Inference with {sourceType.charAt(0).toUpperCase() + sourceType.slice(1)}</button>
            </form>
        </div>
    );
}
*/


/*
'use client'
import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Image,
    Select,
    Input,
    useBreakpointValue,
    useToast
} from '@chakra-ui/react';
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

export default function Home() {
    const [confidence, setConfidence] = useState('0.75');
    const [sourceType, setSourceType] = useState('camera');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const toast = useToast();

    const handleInference = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/run_inference', { confidence });
            setMessage(response.data.message);
            setError('');
            toast({
                title: "Success",
                description: response.data.message,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || 'An error occurred');
                toast({
                    title: "Error",
                    description: err.response?.data?.error || 'An error occurred',
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                setError('An unknown error occurred');
                toast({
                    title: "Error",
                    description: 'An unknown error occurred',
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
            setMessage('');
        }
    };

    const handleInferenceSource = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('confidence', confidence);
        formData.append('source_type', sourceType);
        if (sourceType === 'image' && imageFile) {
            formData.append('image_file', imageFile);
        }

        try {
            const response = await axios.post('http://localhost:8080/api/run_inference_source', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage(response.data.message);
            setError('');
            toast({
                title: "Success",
                description: response.data.message,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || 'An error occurred');
                toast({
                    title: "Error",
                    description: err.response?.data?.error || 'An error occurred',
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                setError('An unknown error occurred');
                toast({
                    title: "Error",
                    description: 'An unknown error occurred',
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
            setMessage('');
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImageFile(e.target.files[0]);
        }
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
                            Real Time Pose Detection
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Upload a valid image of a yoga pose in JPEG, PNG, JPG format or use your camera to run inference!
                    </Text>
                    {error && <Text color="red.500">{error}</Text>}
                    {message && <Text color="green.500">{message}</Text>}
                    
                    <form onSubmit={handleInference}>
                        <Stack spacing={4}>
                            <Input
                                type="text"
                                id="confidence"
                                value={confidence}
                                onChange={(e) => setConfidence(e.target.value)}
                                placeholder="Confidence Threshold (0-1)"
                            />
                            <Button type="submit" rounded={'full'} bg={'green.400'} color={'white'} _hover={{ bg: 'orange.500' }}>
                                Run Inference with Camera
                            </Button>
                        </Stack>
                    </form>

                    <hr />

                    <form onSubmit={handleInferenceSource} encType="multipart/form-data">
                        <Stack spacing={4}>
                            <Select id="source_type" value={sourceType} onChange={(e) => setSourceType(e.target.value)}>
                                <option value="image">Image</option>
                                <option value="camera">Camera</option>
                            </Select>
                            {sourceType === 'image' && (
                                <>
                                    <Input
                                        type="file"
                                        id="image_file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </>
                            )}
                            <Input
                                type="text"
                                id="confidence_source"
                                value={confidence}
                                onChange={(e) => setConfidence(e.target.value)}
                                placeholder="Confidence Threshold (0-1)"
                            />
                            <Button type="submit" rounded={'full'} bg={'green.400'} color={'white'} _hover={{ bg: 'orange.500' }}>
                                Run Inference with {sourceType.charAt(0).toUpperCase() + sourceType.slice(1)}
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Flex>
            <Flex flex={1} position="relative">
                <Image
                    alt={'Yoga Pose'}
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


'use client'
import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Image,
    Select,
    Input,
    useBreakpointValue,
    useToast
} from '@chakra-ui/react';
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

export default function Home() {
    const [confidence] = useState('0.75');
    const [sourceType, setSourceType] = useState('camera');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const toast = useToast();

    const handleInference = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/run_inference', { confidence });
            setMessage(response.data.message);
            setError('');
            toast({
                title: "Success",
                description: response.data.message,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || 'An error occurred');
                toast({
                    title: "Error",
                    description: err.response?.data?.error || 'An error occurred',
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                setError('An unknown error occurred');
                toast({
                    title: "Error",
                    description: 'An unknown error occurred',
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
            setMessage('');
        }
    };

    const handleInferenceSource = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('confidence', confidence);
        formData.append('source_type', sourceType);
        if (sourceType === 'image' && imageFile) {
            formData.append('image_file', imageFile);
        }

        try {
            const response = await axios.post('http://localhost:8081/api/run_inference_source', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage(response.data.message);
            setError('');
            toast({
                title: "Success",
                description: response.data.message,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || 'An error occurred');
                toast({
                    title: "Error",
                    description: err.response?.data?.error || 'An error occurred',
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                setError('An unknown error occurred');
                toast({
                    title: "Error",
                    description: 'An unknown error occurred',
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
            setMessage('');
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImageFile(e.target.files[0]);
        }
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
                            Real Time Pose Detection
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Upload a valid image of a yoga pose in JPEG, PNG, JPG format or use your camera to run inference!
                    </Text>
                    {error && <Text color="red.500">{error}</Text>}
                    {message && <Text color="green.500">{message}</Text>}
                    
                    <form onSubmit={handleInference}>
                        <Stack spacing={4}>
                            <Input
                                type="text"
                                id="confidence"
                                value={confidence}
                                readOnly
                                placeholder="Confidence Threshold (0-1)"
                            />
                            <Button type="submit" rounded={'full'} bg={'green.400'} color={'white'} _hover={{ bg: 'orange.500' }}>
                                Run Inference with Camera
                            </Button>
                        </Stack>
                    </form>

                    <hr />

                    <form onSubmit={handleInferenceSource} encType="multipart/form-data">
                        <Stack spacing={4}>
                            <Select id="source_type" value={sourceType} onChange={(e) => setSourceType(e.target.value)}>
                                <option value="image">Image</option>
                                <option value="camera">Camera</option>
                            </Select>
                            {sourceType === 'image' && (
                                <>
                                    <Input
                                        type="file"
                                        id="image_file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </>
                            )}
                            <Input
                                type="text"
                                id="confidence_source"
                                value={confidence}
                                readOnly
                                placeholder="Confidence Threshold (0-1)"
                            />
                            <Button type="submit" rounded={'full'} bg={'green.400'} color={'white'} _hover={{ bg: 'orange.500' }}>
                                Run Inference with {sourceType.charAt(0).toUpperCase() + sourceType.slice(1)}
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Flex>
            <Flex flex={1} position="relative">
                <Image
                    alt={'Yoga Pose'}
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
