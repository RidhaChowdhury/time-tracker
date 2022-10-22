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

function ModalImplementation() {
  const [goals, setGoals] = React.useState(["Working out", "Studying", "Reading"]);

  return (
    <Stack>
      {goals.map((goal, index) => (
        <Text key={index}>{goal}</Text>
      ))}
      <CreateCategoryModal goals = {goals}/>
    </Stack>
  )
}

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Text>Time Tracker</Text>
      <Text>Built with ChakraUI</Text>
      <ModalImplementation/>
    </Box>
  </ChakraProvider>
)
