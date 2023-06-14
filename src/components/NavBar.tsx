import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='40px'/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar