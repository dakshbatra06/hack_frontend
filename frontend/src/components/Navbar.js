import { Box, HStack, Link, Image, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box as="nav" bg="black" color="white" px={8} py={4} boxShadow="sm">
      <HStack justify="space-between" align="center">
        <HStack spacing={3}>
          <Image src="/logo.png" alt="QuickComs Logo" boxSize="40px" />
          <Text fontWeight="bold" fontSize="lg">QUICK COMS</Text>
        </HStack>
        <HStack spacing={6} fontWeight="medium" fontSize="sm">
          <Link href="#features">Features</Link>
          <Link href="#how-it-works">How It Works</Link>
          <Link href="#use-cases">Use Cases</Link>
          <Link href="#tech-stack">Tech Stack</Link>
          <Link href="#get-started">Get Started</Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
