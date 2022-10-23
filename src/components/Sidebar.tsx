import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  Radio,
  RadioGroup,
  Button,
} from "@chakra-ui/react";
import { useHookstate } from "@hookstate/core";
import React from "react";
import store from "../store";
import Goal from "../types/Goal";
import { CreateCategoryModal } from "../CreateCategoryModal";
import Navbar from "./Navbar";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [goals, setGoals] = React.useState<Array<Goal>>([]);
  const [selectedGoal, setSelectedGoal] = React.useState<string>("");

  const globalState = useHookstate(store);

  React.useEffect(() => {
    setGoals(globalState.goals.get());
  }, [globalState.goals]);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        goals={goals}
        selectedGoal={selectedGoal}
        setSelectedGoal={setSelectedGoal}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent
            onClose={onClose}
            goals={goals}
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}
          />
        </DrawerContent>
      </Drawer>
      <Navbar onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <p>{selectedGoal ? "Selected goal" : "No goal selected"}</p>
        <p>{goals.find((goal: Goal) => goal.id === selectedGoal)?.name}</p>
      </Box>
    </Box>
  );
}

interface SidebarContentProps extends BoxProps {
  onClose: () => void;
  goals: Array<Goal>;
  selectedGoal: string;
  setSelectedGoal: (selectedGoal: string) => void;
}

const SidebarContent = ({
  onClose,
  goals,
  selectedGoal,
  setSelectedGoal,
  ...rest
}: SidebarContentProps) => {
  const { isOpen, onOpen, onClose: onCloseModal } = useDisclosure();

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Your goals
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <RadioGroup onChange={setSelectedGoal} value={selectedGoal}>
        {goals.map((goal: Goal) => (
          <Flex
            key={goal.id}
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
          >
            <Radio value={goal.id}>{goal.name}</Radio>
          </Flex>
        ))}
      </RadioGroup>
      <Flex align="center" p="4" mx="4" borderRadius="lg">
        <Button colorScheme={"teal"} onClick={onOpen}>
          Add new goal
        </Button>
        <CreateCategoryModal isOpen={isOpen} onCloseModal={onCloseModal} />
      </Flex>
    </Box>
  );
};
