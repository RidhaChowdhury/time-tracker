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

function ModalExample()   {
  const{isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Box p={4}>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new goal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Text>What do you want to call this?</Text>
              <Input placeholder="Category name"/>
              <Text>Target minutes per week</Text>
              <NumberInput placeholder="" step={1} defaultValue={60} min={5}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper/>
                  <NumberDecrementStepper/>
                </NumberInputStepper>
              </NumberInput>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
  )
}

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Text>Time Tracker</Text>
      <Text>Built with ChakraUI</Text>
      <CreateCategoryModal/>
    </Box>
  </ChakraProvider>
)
