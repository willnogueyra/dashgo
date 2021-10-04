import { Flex, useBreakpointValue } from "@chakra-ui/react"
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
      <Logo />

      { isWideVersion && <SearchBox />}
          
      <Flex
        align="center"
        marginLeft="auto"
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  );
}