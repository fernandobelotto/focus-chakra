import * as React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { StandAloneControls } from "./components/StandAloneControls";
import { ModalExample } from "./components/ModalExample";
import { DrawerExample } from "./components/DrawerExample";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container size={"xl"} my={{ base: 0, md: 8 }}>
      <Flex alignItems="center">
        <Box fontStyle="italic" fontWeight="bold">
          Chakra UI
        </Box>
        <Spacer />
        <IconButton
          rounded="full"
          aria-label="Toggle color mode"
          bgColor="transparent"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>
      <Container maxW="720px">
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
          Change Focus Ring Color
        </Heading>
        <StandAloneControls />
        <ModalExample />
        <DrawerExample />
      </Container>
    </Container>
  );
}
