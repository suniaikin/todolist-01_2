import type { TaskType, FilterType } from "./types";
import { FILTER_NAMES } from "./constants";


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

export const filterName = (filter: FilterType) => {
	switch (filter) {
        case "active":
            return FILTER_NAMES.ACTIVE;
        case "completed":
            return FILTER_NAMES.COMPLETED
        default:
            return FILTER_NAMES.ALL;
    }
}

