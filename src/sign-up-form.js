import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
} from "native-base";

const SignUpForm = () => {
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          fontWeight="medium"
          size="xs"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
        >
          Sign up to continue!
        </Heading>
        <VStack mt="5" space={3}>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="indigo" mt="2">Sign up</Button>
        </VStack>
      </Box>
    </Center>
  );
};
export default SignUpForm;
