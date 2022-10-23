import {
  Text,
  NumberInput,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Stack,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useHookstate } from "@hookstate/core";
import React from "react";
import store from "./store";
import Goal from "./types/Goal";

interface CategoryModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export const CreateCategoryModal = (props: CategoryModalProps) => {
  const { isOpen, onCloseModal } = props;

  const [targetMinutes, setTargetMinutes] = React.useState<number>(5);
  const [goalName, setGoalName] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setGoalName(event.target.value);

  const globalState = useHookstate(store);

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a new goal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <Text>What do you want to call this?</Text>
            <Input
              placeholder="Category name"
              value={goalName}
              onChange={handleChange}
            />
            <Text>Target minutes per week</Text>
            <NumberInput
              value={targetMinutes}
              step={1}
              defaultValue={60}
              min={5}
              onChange={(_valueAsString, valueAsNumber) =>
                setTargetMinutes(valueAsNumber)
              }
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="teal"
            onClick={() => {
              const newGoal: Goal = {
                id: Date.now().toString(),
                name: goalName,
                targetMinutes: targetMinutes,
              };

              localStorage.setItem(
                "goals",
                JSON.stringify([...globalState.get().goals, newGoal])
              );

              globalState.goals.set((previousGoals) => [
                ...previousGoals,
                newGoal,
              ]);

              onCloseModal();
            }}
          >
            Save Goal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
