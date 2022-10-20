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
import Navbar from "./Navbar";

interface Goal {
  id: string;
  name: string;
}

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
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
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Navbar onOpen={onOpen} />
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [goals, setGoals] = React.useState([]);
  const [goalId, setGoalId] = React.useState("");

  const globalState = useHookstate(store);

  React.useEffect(() => {
    if (globalState.get().goals) {
      setGoals(globalState.get().goals);
    }
  }, [globalState]);

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
      <RadioGroup onChange={setGoalId} value={goalId}>
        {goals.map((goal: Goal) => (
          <Flex
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
        <Button colorScheme={"teal"}>Add new goal</Button>
      </Flex>
    </Box>
  );
};
