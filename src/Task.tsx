import { Button } from "./Button";
import type { TaskComponentProps } from "./types";


export const Task = ({
    id,
    title,
    isDone,
    deleteTask,
    onChangeStatus,
    className,
}: TaskComponentProps) => {
    return (
        <li key={id} className="list-row">
            <Button
                customClass="btn-delete"
                title="x"
                onClickHandler={() => deleteTask(id)}
            />
            <input
                type="checkbox"
                checked={isDone}
                onChange={(e) => onChangeStatus(id, e.target.checked)}
            />
            <span className={className}>{title}</span>
        </li>
    );
};

