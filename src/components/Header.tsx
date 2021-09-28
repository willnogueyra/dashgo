import { Flex, Text, Input, Icon } from "@chakra-ui/react"
import { RiSearchLine } from "react-icons/ri"

export function Header() {
  return (
    <Flex
      width="100%"
      as="header"
      maxWidth={1480}
      height="20"
      marginX="auto" // margin horizontal
      marginTop="4"
      align="center"
      paddingX="6" // padding horizontal
    >
      <Text 
        fontSize="3xl" 
        fontWeight="bold" 
        letterSpacing="tight" 
        width="64"
      >
        dashgo
        <Text as="span" marginLeft="1" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex= "1"
        paddingY="4" // padding vertical
        paddingX="8" // padding horizontal
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color= "gray.200"
        position="relative"
        background="gray.800"
        borderRadius="full"
      >
        <Input 
          color="gray.50"
          variant="unstyled"
          paddingX="4"
          marginRight="4"
          placeholder="Buscar na plataforma"
          _placeholder= {{
            color: 'gray.400'
          }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    </Flex>
  );
}