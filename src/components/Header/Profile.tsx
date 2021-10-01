import { Flex, Box, Text, Avatar} from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box marginRight="4" textAlign="right">
        <Text>william</Text>
        <Text color="gray.300" fontSize="small">
          will.ribeiro@live.com
        </Text>
      </Box>

      <Avatar size="md" name="William" src="https://github.com/willnogueyra.png" />
    </Flex>
  );
}