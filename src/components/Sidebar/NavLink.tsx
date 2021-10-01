import { Link, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({icon, children, ...rest}: NavLinkProps) { // ...rest para podermos adicionar mais props
  return (
    <Link display="flex" align="center" paddingY="1" {...rest}> 
      <Icon as={icon} fontSize="20" />
      <Text marginLeft="4" fontWeight="medium">{children}</Text>
    </Link>
  );
}