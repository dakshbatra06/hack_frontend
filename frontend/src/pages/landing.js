// src/pages/Landing.js
import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    Flex,
    Divider,
    SimpleGrid,
  } from '@chakra-ui/react';
  import { Typewriter } from 'react-simple-typewriter';
  import { motion } from 'framer-motion';
  import { useNavigate } from 'react-router-dom';

  
  const MotionBox = motion(Box);
  const MotionDiv = motion.div;

  
  const Landing = () => {
    const navigate = useNavigate();
    return (
      <>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box bg="white" px={6} py={16}>
            <Flex
              maxW="7xl"
              mx="auto"
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="space-between"
              gap={8}
              wrap="wrap"
            >
              <VStack align="start" spacing={6} flex="1" maxW="50%">
                <Text fontSize="sm" fontWeight="medium" color="gray.500">
                  Powered by LangChain
                </Text>
                <Heading
                  fontSize={{ base: '3xl', md: '5xl' }}
                  lineHeight="short"
                  fontWeight="extrabold"
                  color="gray.900"
                >
                  Turn your{' '}
                  <Text as="span" color="purple.500">
                    internal startup activity
                  </Text>{' '}
                  into{' '}
                  <Text as="span" color="purple.500">
                    content
                  </Text>{' '}
                  that converts.
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  An AI-powered agent that transforms your internal activities into
                  high-quality, personalized, and clear content. You build. We write.
                </Text>
                <HStack spacing={4}>
                <Button
  colorScheme="purple"
  size="lg"
  onClick={() => navigate('/team')}
  _hover={{ transform: 'scale(1.04)', boxShadow: 'lg' }}
>
  Get Started
</Button>
                  <Button variant="outline" size="lg" _hover={{ transform: 'scale(1.04)', boxShadow: 'md' }}>
                    Learn More
                  </Button>
                </HStack>
              </VStack>
  
              <Box
                flex="1"
                maxW="50%"
                bg="black"
                color="white"
                p={6}
                borderRadius="md"
                boxShadow="2xl"
                fontFamily="mono"
                fontSize="sm"
                whiteSpace="pre-line"
                minH="260px"
                transform="rotate(-0.25deg)"
              >
                <Typewriter
                  words={[`
  > QuickComs, create a post about our recent activity
  
  Tech:
  Launching Video and Transcript...
  Shoutout to the devs who made this happen in 2 days
  #startups #ux #shipit
                  `]}
                  typeSpeed={30}
                  cursor
                  cursorStyle="_"
                />
              </Box>
            </Flex>
          </Box>
        </MotionDiv>
  
        <Divider my={16} />
  
        <Box textAlign="center" px={4} pt={4} pb={20}>
          <Heading fontSize="3xl" fontWeight="bold" mb={4} color="gray.800">
            Why It's Different
          </Heading>
          <Text fontSize="md" color="gray.600" mb={12}>
            Unlike traditional AI content tools, QuickComs is specifically designed
            for startup founders and their internal communication needs.
          </Text>
  
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            maxW="3xl"
            mx="auto"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            bg="purple.50"
          >
            <Box
              display="grid"
              gridTemplateColumns="1fr 1fr 1fr"
              fontWeight="semibold"
              py={5}
              px={6}
              borderBottom="1px solid"
              borderColor="purple.100"
              bg="purple.100"
              color="gray.800"
              fontSize="sm"
            >
              <Text textAlign="left">Feature</Text>
              <Text textAlign="center">QuickComs</Text>
              <Text textAlign="center">Other AI Tools</Text>
            </Box>
  
            {["Daily Flowcharts", "Multi-platform output in one go", "Video Output", "Team-focused communication", "Built on LangChain with real-time chaining & memory"].map(
              (feature, i) => (
                <Box
                  key={i}
                  display="grid"
                  gridTemplateColumns="1fr 1fr 1fr"
                  py={5}
                  px={6}
                  borderTop="1px solid"
                  borderColor="purple.100"
                  fontSize="sm"
                  bg="purple.50"
                >
                  <Text textAlign="left" color="gray.700">
                    {feature}
                  </Text>
                  <Text textAlign="center">✅</Text>
                  <Text textAlign="center">❌</Text>
                </Box>
              )
            )}
          </MotionBox>
        </Box>
  
        <Divider my={24} />
  
        <Box id="how-it-works" bg="#0F1117" py={20} px={6} color="white">
          <Box textAlign="center" mb={16}>
            <Heading fontSize="2xl" fontWeight="bold" mb={3}>
              How QuickComs Works
            </Heading>
            <Text fontSize="sm" color="gray.400" maxW="2xl" mx="auto">
              A seamless workflow that converts your team’s activity into ready-to-publish, platform-optimized content.
            </Text>
          </Box>
  
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="6xl" mx="auto">
            {[{
              title: "Connect Your Tools",
              desc: "Sync your meeting notes, changelogs, and team chats from Slack, Linear, Notion, Zoom and more.",
              icon: "🧩"
            }, {
              title: "AI Reads Your Content",
              desc: "Our agent analyzes your team’s real work, context, and goals using LangChain and memory.",
              icon: "🧠"
            }, {
              title: "Multi-Platform Output",
              desc: "Instant content for X, LinkedIn, product updates, and summaries — auto-styled for each.",
              icon: "📤"
            }, {
              title: "Maintain Your Voice",
              desc: "It sounds like you — because it learns from how you speak, write, and present.",
              icon: "🗣️"
            }].map((item, i) => (
              <Box
                key={i}
                bg="gray.800"
                borderRadius="lg"
                p={6}
                boxShadow="lg"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
              >
                <Text fontSize="2xl" mb={4}>{item.icon}</Text>
                <Text fontWeight="semibold" fontSize="lg" mb={2}>
                  {item.title}
                </Text>
                <Text fontSize="sm" color="gray.400">
                  {item.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </>
    );
  };
  
  export default Landing;
  