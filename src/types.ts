export type TaskProps = {
	id: string;
	title: string;
	isDone: boolean
}

export type TodolistItemProps = {
    title: string;
    tasks: TaskProps[];
    deleteTask: (taskId: TaskProps["id"]) => void;
    changeFilter: (filter: FilterType) => void;
    createTask: (title: string) => void;
};

export type TaskComponentProps = {
    id: string;
    title: string;
    isDone: boolean;
    deleteTask: (taskId: TaskProps["id"]) => void;
    changeFilter: (filter: FilterType) => void;
};

export type ButtonComponentProps = {
    title: string;
    onClick?: () => void;
};

export type FilterType = "all" |  "active" | "completed"