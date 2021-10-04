import { Flex, Box, Text, Avatar} from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box marginRight="4" textAlign="right">
        <Text>william</Text>
        <Text color="gray.300" fontSize="small">
          will.ribeiro@live.com
        </Text>
      </Box>
      )}

      <Avatar size="md" name="William" src="https://github.com/willnogueyra.png" />
    </Flex>
  );
}