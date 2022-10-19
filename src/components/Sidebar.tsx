import {
  Button,
  Container,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";

export default function Sidebar() {
  const [goal, setGoal] = React.useState("1");

  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"
                    `}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      gap="20"
    >
      <GridItem pl="2" area={"header"}>
        Time tracker
      </GridItem>
      <GridItem pl="2" area={"nav"}>
        Your goals
        <RadioGroup onChange={setGoal} value={goal}>
          <Stack>
            <Radio value="1">Goal 1</Radio>
            <Radio value="2">Goal 2</Radio>
            <Radio value="3">Goal 3</Radio>
          </Stack>
        </RadioGroup>
        <Button colorScheme="blue" mt={5}>
          Add a new goal
        </Button>
      </GridItem>
      <GridItem pl="2" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}
