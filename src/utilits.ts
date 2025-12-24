import type { TaskProps, FilterType } from "./types";


export const getFilteredTasks = (tasks: TaskProps[], filter: FilterType) => {
    switch (filter) {
        case "active":
            return tasks.filter((t) => !t.isDone);
        case "completed":
            return tasks.filter((t) => t.isDone);
        default:
            return tasks;
    }
};

