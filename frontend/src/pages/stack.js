import {
    Box,
    Heading,
    Text,
    Grid,
    VStack,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaReact } from 'react-icons/fa';
  import { SiChakraui, SiSupabase, SiFastapi, SiMermaid, SiOpencv } from 'react-icons/si';
  
  const techStack = [
    { name: 'React.js', icon: FaReact },
    { name: 'Chakra UI', icon: SiChakraui },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Mermaid CLI', icon: SiMermaid },
    { name: 'OpenCV', icon: SiOpencv },
  ];
  
  const Stack = () => {
    const cardBg = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200');
    const iconColor = useColorModeValue('purple.500', 'purple.300');
  
    return (
      <Box
      minH="90vh"
      px={6}
      py={20}
      bgGradient="linear(to-b, white, purple.50, purple.100)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
    
      
        <Box
          bg="whiteAlpha.800"
          backdropFilter="blur(10px)"
          borderRadius="2xl"
          px={{ base: 6}}
          py={20}
          boxShadow="2xl"
          flexDirection="column"
          maxW="6xl"
          w="full"
        >
          <Heading textAlign="center" fontSize={{ base: '2xl', md: '4xl' }} mb={2}>
            Our Tech Stack
          </Heading>
          <Text textAlign="center" fontSize="md" color="gray.500" mb={10}>
            Tools we use to build, launch, and scale.
          </Text>
  
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={8}
            justifyItems="center"
          >
            {techStack.map((tech) => (
              <VStack
                key={tech.name}
                spacing={4}
                bg={cardBg}
                boxShadow="lg"
                borderRadius="xl"
                p={6}
                transition="all 0.2s"
                _hover={{ transform: 'translateY(-6px)', shadow: 'xl' }}
              >
                <Icon as={tech.icon} boxSize="3rem" color={iconColor} />
                <Text fontWeight="medium" fontSize="md">
                  {tech.name}
                </Text>
              </VStack>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };
  
  export default Stack;
  