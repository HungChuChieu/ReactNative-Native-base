import { useState } from "react";

import { Box, Center, HStack, Icon, Pressable, Text } from "native-base";
import { Ionicons } from "@native-base/icons";
const Footer = () => {
  const [seleted, setSelected] = useState(1);

  return (
    <Box
      flex={1}
      bg="white"
      safeAreaTop
      width={"100%"}
    //   maxW="300px"
      alignSelf={"center"}
    >
      <Center flex={1}></Center>
      <HStack borderRadius={"md"} bg="indigo.600" alignItems={"center"} safeAreaBottom shadow={6}>
        <Pressable
          // cursor="pointer"
          opacity={seleted === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Icon
              as={<Ionicons name={seleted === 0 ? "home" : "home-outline"} />}
              color={"white"}
              size="sm"
            />
            <Text color={"white"} fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>

        <Pressable
          opacity={seleted === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            <Icon
              color={"white"}
              size="sm"
              mb={"1"}
              as={<Ionicons name="search" />}
            />
            <Text color={"white"} fontSize="12">
              Search
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={seleted === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            <Icon
              mb="1"
              color="white"
              size="sm"
              as={<Ionicons name={seleted === 2 ? "cart" : "cart-outline"} />}
            />
            <Text>Cart</Text>
          </Center>
        </Pressable>
        <Pressable
          onPress={() => setSelected(3)}
          opacity={seleted === 3 ? 1 : 0.6}
          py="2"
          flex={1}
        >
          <Center>
            <Icon
              mb="1"
              color={"white"}
              size="sm"
              as={
                <Ionicons name={seleted === 3 ? "people" : "people-outline"} />
              }
            />

            <Text>Account</Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Footer;
