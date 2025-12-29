import type { TaskType, FilterType } from "./types";


export const getFilteredTasks = (tasks: TaskType[], filter: FilterType) => {
    switch (filter) {
        case "active":
            return tasks.filter((t) => !t.isDone);
        case "completed":
            return tasks.filter((t) => t.isDone);
        default:
            return tasks;
    }
};

