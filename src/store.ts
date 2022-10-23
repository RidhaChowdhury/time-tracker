import { hookstate } from "@hookstate/core";
import Goal from "./types/Goal";

const goalsFromStorage: Array<Goal> = JSON.parse(
  localStorage.getItem("goals") || "[]"
);

export default hookstate({ goals: goalsFromStorage });
