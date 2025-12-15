export type TaskProps = {
    id: string;
    title: string;
    isDone: boolean;
};

export const Task = ({ id, title, isDone }: TaskProps) => {
    return (
        <li key={id}>
            <input type="checkbox" checked={isDone} />
            <span>{title}</span>
        </li>
    );
};

// export type TaskProps = {
//     title: string;
//     isDone: boolean;
// };

// export const Task = ({ title, isDone }: TaskProps) => {
//     return (
//         <li>
//             <input type="checkbox" checked={isDone} />{" "}
//             <span>{title}</span>
//         </li>
//     );
// };
