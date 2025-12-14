import { Task } from "./Task";

type Props = {
	title: string
	tasks: Task[]
}

export type Task = {
    id: string;
    title: string;
    isDone: boolean;
};

export const TodolistItem = ({ title, isDone, tasks }: Props) => {
    const listitems = tasks.map((t) => {
        return <Task title={t.title} isDone={t.isDone} />;
    });
    return (
        <div className="lists">
            <div className="list-content">
                <h3>{title}</h3>
                <div className="input-form">
                    <input />
                    <button>+</button>
                </div>
            </div>
            <ul>{listitems}</ul>

            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
