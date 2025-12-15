import type { TaskProps } from "./Task";
import { Task } from "./Task";
import { Button } from "./Button";

type TodolistItemProps = {
    title: string;
    tasks: TaskProps[];
};

export const TodolistItem = ({ title, tasks }: TodolistItemProps) => {
    const listItems =
        tasks.length === 0
            ? "No Tasks Yet"
            : tasks.map((t) => {
                  return <Task id={t.id} isDone={t.isDone} title={t.title} />;
              });

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input />
                <Button title="+" />
            </div>
            <ul>{listItems}</ul>
            <div>
                <Button title="All" />
                <Button title="Active" />
                <Button title="Completed" />
            </div>
        </div>
    );
};

// import { Task } from "./Task";
// import type { TaskProps } from "./Task";
// import { Button } from "./Button";

// type Props = {
//     title: string;
//     tasks: TaskProps[];
// };

// export const TodolistItem = ({ title, tasks }: Props) => {
//     const listitems = tasks.length === 0
//             ? "No tasks"
//             : tasks.map((t) => {
//                   return <Task title={t.title} isDone={t.isDone} />;
//               });
//     return (
//         <div className="lists">
//             <div className="list-content">
//                 <h3>{title}</h3>
//                 <div className="input-form">
//                     <input />
//                     <Button title="+"/>
//                 </div>
//                 <ul>{listitems}</ul>
//             </div>

//             <div className="buttons_bottom ">
//                 <Button title="All" />
//                 <Button title="Active" />
//                 <Button title="Completed" />
//             </div>
//         </div>
//     );
// };
