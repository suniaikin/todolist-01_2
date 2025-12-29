export type TaskType = {
	id: string;
	title: string;
	isDone: boolean
}

export type Props = {
    title: string;
    tasks: TaskType[];
    deleteTask: (taskId: TaskType["id"]) => void;
    createTask: (title: TaskType["title"]) => void;
    changeFilter: (filter: FilterType) => void;
    onChangeStatus: (
        taskId: TaskType["id"],
        isDone: TaskType["isDone"]
    ) => void;
    filter: FilterType
};

export type TaskComponentProps = {
    id: string;
    title: string;
    isDone: boolean;
    deleteTask: (taskId: TaskType["id"]) => void;
    onChangeStatus: (taskId: string, isDone: boolean) => void;
    className: string;
};

export type ButtonComponentProps = {
    title: string;
    onClickHandler?: () => void;
    customClass?: string;
    isDisabled?: boolean;
    className?: string;
};

export type FilterType = "all" |  "active" | "completed"

export type AddTaskFormProps = {
    createTask: (title: TaskType["title"]) => void;
};