import {
  Box,
  Tabs,
  TabList,
  Tab,
  Heading,
  Text,
  Flex,
  IconButton,
  SimpleGrid,
  Button,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { ClipboardCopy, Download, Settings } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MotionBox = motion(Box);
const categories = ['Engineering', 'Sales', 'Human Resources'];

const PlaceholderPanel = ({ title }) => {
  const toast = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(`${title} content copied.`);
    toast({
      title: `Copied content for ${title}`,
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'bottom-left',
    });
  };

  const handleDownload = () => {
    toast({
      title: `Downloaded ${title} video`,
      description: 'Mock download complete.',
      status: 'info',
      duration: 2000,
      isClosable: true,
      position: 'bottom-right',
    });
  };

  return (
    <Box
      bg="white"
      borderRadius="2xl"
      p={8}
      boxShadow="xl"
      w="100%"
      maxW="100%"
      transition="all 0.3s ease"
      position="relative"
      _hover={{ boxShadow: '2xl' }}
    >
      <Flex justify="center" align="center" mb={6} gap={4}>
        <VStack spacing={1} textAlign="center">
          <Heading fontSize="2xl" color="gray.800">
            {title}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Last Updated: 5 min ago
          </Text>
        </VStack>
        <IconButton icon={<Settings size={18} />} variant="ghost" aria-label="Settings" />
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {/* Left Placeholder */}
        <Box
          position="relative"
          h="280px"
          bgGradient="linear(to-br, #f9f9ff, #f2edff)"
          border="1px solid"
          borderColor="purple.100"
          borderRadius="xl"
          boxShadow="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="md"
          fontWeight="medium"
          color="gray.600"
          px={6}
          textAlign="center"
          transition="transform 0.2s ease, box-shadow 0.2s ease"
          _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
        >
          🧠 <br />
          Image or Diagram Placeholder
          <Button
            size="xs"
            variant="ghost"
            position="absolute"
            bottom="10px"
            left="10px"
            onClick={handleCopy}
            leftIcon={<ClipboardCopy size={14} />}
            fontSize="xs"
            colorScheme="purple"
          >
            Copy
          </Button>
        </Box>

        {/* Right Placeholder */}
        <Box
          position="relative"
          h="280px"
          bgGradient="linear(to-br, #f9f9ff, #f2edff)"
          border="1px solid"
          borderColor="purple.100"
          borderRadius="xl"
          boxShadow="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="md"
          fontWeight="medium"
          color="gray.600"
          px={6}
          textAlign="center"
          transition="transform 0.2s ease, box-shadow 0.2s ease"
          _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
        >
          🎥 <br />
          Video Placeholder
          <Button
            size="xs"
            variant="ghost"
            position="absolute"
            bottom="10px"
            right="10px"
            onClick={handleDownload}
            leftIcon={<Download size={14} />}
            fontSize="xs"
            colorScheme="purple"
          >
            Download
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

const TeamView = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box
      px={{ base: 4, md: 8, lg: 16 }}
      py={16}
      minH="100vh"
      bg="white"
      position="relative"
      overflow="hidden"
    >
      {/* Header */}
      <Box textAlign="center" mb={12} position="relative" zIndex={1}>
        <Heading fontSize="4xl" fontWeight="bold" color="black.700">
          Product Hack Team View
        </Heading>
        <Text fontSize="md" color="gray.500" mt={2}>
          Visualize your team’s latest output by category
        </Text>
      </Box>

      {/* Tabs */}
      <Tabs
        variant="unstyled"
        index={selectedTab}
        onChange={(index) => setSelectedTab(index)}
        isFitted
        position="relative"
        zIndex={1}
      >
        <TabList
          justifyContent="center"
          gap={4}
          mb={8}
          borderBottom="1px solid #e2e8f0"
          pb={2}
        >
          {categories.map((cat, i) => (
            <Tab
              key={i}
              px={6}
              py={2}
              fontWeight="medium"
              borderRadius="full"
              _selected={{
                bg: 'purple.100',
                color: 'purple.700',
                boxShadow: 'md',
              }}
              _hover={{ bg: 'purple.50' }}
              transition="all 0.2s"
            >
              {cat}
            </Tab>
          ))}
        </TabList>
      </Tabs>

      <AnimatePresence mode="wait">
        <MotionBox
          key={selectedTab}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <PlaceholderPanel title={categories[selectedTab]} />
        </MotionBox>
      </AnimatePresence>
    </Box>
  );
};

export default TeamView;
