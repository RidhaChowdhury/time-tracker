import { ChakraProvider, theme } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Sidebar />
  </ChakraProvider>
);
