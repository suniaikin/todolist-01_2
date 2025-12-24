import { Button } from "./Button";
import type { TaskComponentProps } from "./types";


export const Task = ({ id, title, isDone, deleteTask }: TaskComponentProps) => {
    return (
        <li key={id} className="list-row">
            <Button
                customClass="btn-delete"
                title="x"
                onClick={() => deleteTask(id)}
            />
            <input type="checkbox" checked={isDone} />
            <span>{title}</span>
        </li>
    );
};

