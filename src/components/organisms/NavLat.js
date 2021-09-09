import {
    Box,
    // Menu,
    // MenuButton,
    // MenuList,
    // IconButton
} from "@chakra-ui/react";
// import {HamburgerIcon } from "@chakra-ui/icons"
import { React } from "react";
import InfoButton from "../atoms/InfoButton";
import Logo from "../atoms/Logo";
import ProposButton from "../atoms/ProposButton";
import VoteButton from "../atoms/VoteButton";

const NavLat = () => {
    // const [on, setOn] = useState(true);
    // const handleBurgerClick = () => {
    //     setOn(on);
    //     try {
    //     } catch (e) {
    //         console.log(e.error);
    //     }
    // };
    return (
        <>
            {/* <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    onClick={handleBurgerClick}
                />
                <MenuList> */}
                    <Box
                        pos="absolute"
                        top="0"
                        h="100%"
                        w={{ sm: "8rem", md: "9rem", lg: "10rem" }}
                        boxShadow="dark-lg"
                        backgroundColor="gray.900"
                    >
                        <Box pos="sticky" top="10" left="0">
                            <Box mb="13rem">
                                <Logo />
                            </Box>
                            <VoteButton />
                            <ProposButton />
                            <InfoButton />
                        </Box>
                    </Box>
                {/* </MenuList>
            </Menu> */}
        </>
    );
};

export default NavLat;
