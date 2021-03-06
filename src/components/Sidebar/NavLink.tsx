import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link"
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string,
}

export function NavLink({icon, children, href, ...rest}: NavLinkProps) { // ...rest para podermos adicionar mais props
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" paddingY="1" {...rest}> 
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}