import { Box, Button, Center, FormControl, Input, VStack } from "native-base";
import { useState } from "react";

const Validation = () => {
  const [FormData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validate = () => {
    if (FormData.name === undefined) {
      setErrors({ ...errors, name: "Name is required" });
      return false;
    } else if (FormData.name.length < 3) {
      setErrors({ ...errors, name: "Name is too short" });
      return false;
    }
    setErrors({});
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log("Submitted") : console.log("Validation Failed");
  };

  return (
    <Center flex={1}>
      <VStack safeArea width="90%" mx="3" maxW="300px">
        <FormControl isRequired isInvalid={`name` in errors}>
          <FormControl.Label
            _text={{
              bold: "true",
            }}
          >
            Name
          </FormControl.Label>
          <Input
            placeholder="Higo"
            onChangeText={(e) => setFormData({ ...FormData, name: e })}
          />
          {`name` in errors ? (
            <FormControl.ErrorMessage
              _text={{
                fontSize: "xs",
              }}
            >
              Error
            </FormControl.ErrorMessage>
          ) : (
            <FormControl.HelperText
              _text={{
                fontSize: "xs",
              }}
            >
              Name should contain atleast 3 character.
            </FormControl.HelperText>
          )}
        </FormControl>
        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Submit
        </Button>
      </VStack>
    </Center>
  );
};
export default Validation;
