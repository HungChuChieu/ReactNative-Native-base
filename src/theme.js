import {
  Text,
  Center,
  useColorMode,
  Box,
  useColorModeValue,
  Button,
} from "native-base";

function UseColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center
      flex={1}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "primary.100",
      }}
    >
      <Text fontSize="lg" display="flex" mb="20">
        The active color mode is{" "}
        <Text bold fontSize="lg">
          {colorMode}
        </Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

export default UseColorMode;
