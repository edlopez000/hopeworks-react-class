import {
  ChakraProvider,
  Input,
  Text,
  Box,
  AspectRatio,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box ml="5em">
        <Text>Users Sign Up Form</Text>
        <Text>Name</Text>
        <Input placeholder="Full Name" />
        <Text>Password</Text>
        <Input placeholder="password" />
        <Text>Email</Text>
        <Input placeholder="email" />
        <AspectRatio maxW="560px" ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </ChakraProvider>
  );
}

export default App;
