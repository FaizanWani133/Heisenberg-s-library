import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Link,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box>
      <Container maxWidth="2xl" padding="4">
        <Heading as="h2" size="lg" textAlign="center" marginBottom="20">
          Login
        </Heading>
        <form>
          <FormControl id="username" marginBottom="4">
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Enter your username" />
          </FormControl>

          <FormControl id="password" marginBottom="4">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            width="full"
            marginBottom="4"
          >
            Sign In
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
