import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='40px'/>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar