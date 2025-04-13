import {
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Heading,
    Text,
    Flex,
    IconButton,
    SimpleGrid,
    Button,
    useToast,
  } from '@chakra-ui/react';
  import { ClipboardCopy, Download, Settings } from 'lucide-react';
  
  const categories = ['Engineering', 'Sales', 'Marketing'];
  
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
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Heading fontSize="2xl" color="gray.800">{title}</Heading>
            <Text fontSize="sm" color="gray.500">Last Updated: 5 min ago</Text>
          </Box>
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
          <Heading fontSize="4xl" fontWeight="bold" color="purple.700">
            Your Team View
          </Heading>
          <Text fontSize="md" color="gray.500" mt={2}>
            Visualize your team’s latest output by category
          </Text>
        </Box>
  
        {/* Tabs */}
        <Tabs variant="unstyled" isFitted position="relative" zIndex={1}>
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
  
          <TabPanels>
            {categories.map((cat) => (
              <TabPanel key={cat} px={0}>
                <PlaceholderPanel title={cat} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    );
  };
  
  export default TeamView;
  