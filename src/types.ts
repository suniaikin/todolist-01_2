export type TaskProps = {
	id: string;
	title: string;
	isDone: boolean
}

export type TodolistItemProps = {
    title: string;
    tasks: TaskProps[];
    deleteTask: (taskId: TaskProps["id"]) => void;
    createTask: (title: TaskProps["title"]) => void;
    onChangeStatus: (taskId: TaskProps["id"], isDone: TaskProps["isDone"]) => void;
};

export type TaskComponentProps = {
    id: string;
    title: string;
    isDone: boolean;
    deleteTask: (taskId: TaskProps["id"]) => void;
    onChangeStatus: (taskId: string, isDone: boolean) => void;
};

export type ButtonComponentProps = {
    title: string;
    onClick?: () => void;
    customClass?: string;
    isDsabled?: boolean;
};

export type FilterType = "all" |  "active" | "completed"

export type AddTaskFormProps = {
    createTask: (title: TaskProps["title"]) => void;
};