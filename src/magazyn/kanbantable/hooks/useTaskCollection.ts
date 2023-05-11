import { useLocalStorage } from "usehooks-ts";

import { v4 as uuidv4 } from "uuid";
import { ColumnType } from "../utils/enums";
import { TaskModel } from "../utils/models";

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>("tasks", {
    "Do zrobienia": [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: "Task 1",
        color: "blue.300",
      },
    ],
    "W trakcie": [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: "Task 2",
        color: "yellow.300",
      },
    ],
    Zablokowane: [
      {
        id: uuidv4(),
        column: ColumnType.BLOCKED,
        title: "Task 3",
        color: "red.300",
      },
    ],
    Ukończone: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: "Task 4",
        color: "green.300",
      },
    ],
  });
}

export default useTaskCollection;
