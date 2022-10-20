import { hookstate } from "@hookstate/core";

const goalsFromStorage  = JSON.parse(localStorage.getItem('goals') || '{}');

export default hookstate(
    { goals: goalsFromStorage }
);