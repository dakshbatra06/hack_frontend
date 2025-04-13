// src/components/Footer.js
import { Box, Flex, Text, Link, HStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.50" py={6} px={{ base: 4, md: 8 }} mt={16} borderTop="1px solid #e2e8f0">
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
        <Text fontSize="sm" color="gray.500">© 2025 QuickComs. All rights reserved.</Text>
        <HStack spacing={4} mt={{ base: 2, md: 0 }}>
          <Link fontSize="sm" color="gray.500">Privacy</Link>
          <Link fontSize="sm" color="gray.500">Terms</Link>
          <Link fontSize="sm" color="gray.500">GitHub</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
