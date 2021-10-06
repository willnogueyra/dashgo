import { Flex, Input, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

// Controlled components
// Uncontrolled components

// Imperativa vs Declarativa

export function SearchBox() {

  const searchInputRef = useRef<HTMLInputElement>(null) // declarativa
  // searchInputRef.current.focus() (imperativa)


  return (
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
          ref={searchInputRef}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
  )
}