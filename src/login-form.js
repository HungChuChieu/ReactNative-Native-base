import { Box, Center, FormControl, Heading, VStack ,Input, Link, Button, HStack, Text } from "native-base";

const LoginForm =()=>{
    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="80%" maxW="290"> 
                <Heading size ="lg" fontWeight="600" color="coolGray.600"_dark={{color:"warmGray.50"}}>
                    Welcome
                </Heading>
                <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs" _dark={{color:"warmGray.200"}}>
                    Sign in to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email ID</FormControl.Label>
                        <Input/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password"/>
                        <Link _text={{
                            fontSize:"xs",
                            fontWeight:"500",
                            color:"indigo.500"
                            }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo">Sign in</Button>
                    <HStack>
                        <Text fontSize={"sm"} color="coolGray.600" _dark={{
                            color:"warmGray.200"
                        }}>I'm a new user.{" "}</Text>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize:"sm"
                        }} href="#">Sign Up</Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    )
}

export default LoginForm;