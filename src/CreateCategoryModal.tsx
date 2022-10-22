import {
    Box,
    Text,
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
import * as React from "react"

interface CategoryModal {
  goals: string[];
}
/*
void()=> print(onCloseFunction:Function) {
  console.log("test");
  onCloseFunction();
}
*/
export const CreateCategoryModal = (props: CategoryModal) => {
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
            <Button colorScheme="blue" mr={3} onClick={onClose}>Save Goal</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
    )
}