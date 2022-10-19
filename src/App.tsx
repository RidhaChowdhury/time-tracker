import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Sidebar from "./components/Sidebar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Sidebar />
    <Box textAlign="center" fontSize="xl"></Box>
  </ChakraProvider>
);
