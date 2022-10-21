import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  NumberInput,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Stack,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react"
import {CreateCategoryModal} from "./CreateCategoryModal"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Text>Time Tracker</Text>
      <Text>Built with ChakraUI</Text>
      <CreateCategoryModal/>
    </Box>
  </ChakraProvider>
)
