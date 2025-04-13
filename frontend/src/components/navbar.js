import {
    Box,
    Flex,
    Image,
    Text,
    HStack,
    Link as ChakraLink,
    Spacer,
  } from '@chakra-ui/react';
  import { Link as RouterLink } from 'react-router-dom';
  import logo from './logo.jpeg'; // relative to navbar.js
  
  const Navbar = () => {
    return (
      <Box bg="black" px={10} py={4} boxShadow="md">
        <Flex align="center" justify="space-between" position="relative">
          {/* Left (Logo) */}
          <RouterLink to="/">
            <Image
  src={logo}
  alt="QuickComs Logo"
  boxSize="65px"
  objectFit="contain"
  cursor="pointer"
/>

          </RouterLink>
  
          {/* Centered Brand */}
          <Box position="absolute" left="50%" transform="translateX(-50%)">
            <RouterLink to="/">
                <HStack>

                <Text
  fontFamily="Segoe UI, sans-serif"
  fontWeight="bold"
  fontSize="30px"
  color="white"
  whiteSpace="nowrap"
  _hover={{ textDecoration: 'none' }}
>
  Quick
</Text>
<Text
  fontFamily="Segoe UI, sans-serif"
  fontWeight="bold"
  fontSize="30px"
  color="purple.500"
  whiteSpace="nowrap"
  _hover={{ textDecoration: 'none' }}
>
  Coms
</Text>

              </HStack>

            </RouterLink>
          </Box>
  
          {/* Right Nav Links */}
          <HStack spacing={4}>
            <ChakraLink as={RouterLink} to="/features" color="gray.300" _hover={{ color: 'white' }}>
              Features
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/how-it-works" color="gray.300" _hover={{ color: 'white' }}>
              How It Works
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/use-cases" color="gray.300" _hover={{ color: 'white' }}>
              Use Cases
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/tech-stack" color="gray.300" _hover={{ color: 'white' }}>
              Tech Stack
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/get-started" fontWeight="semibold" color="white">
              Get Started
            </ChakraLink>
          </HStack>
        </Flex>
      </Box>
    );
  };
  
  export default Navbar;
  