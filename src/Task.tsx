import { Button } from "./Button";
import type { TaskComponentProps } from "./types";


export const Task = ({ id, title, isDone, deleteTask }: TaskComponentProps) => {
    return (
        <li key={id}>
            <input type="checkbox" checked={isDone} />
            <span>{title}</span>
            <Button title="x" onClick={() => deleteTask(id)} />
        </li>
    );
};

