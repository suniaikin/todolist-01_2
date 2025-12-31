import "./App.css";
import { v1 } from "uuid";
import { TodoList } from "./TodolistItem.tsx";
import type { TaskType } from "./types";
import { useState } from "react";
import type { FilterType } from "./types";
import { getFilteredTasks } from "./utils.ts";

const title_1 = "What to learn";



export const App = () => {
    // BLL

    
    const [tasks, setTasks] = useState<TaskType[]>([
        { id: v1(), title: "JS", isDone: false },
        { id: v1(), title: "React", isDone: false },
        { id: v1(), title: "AI", isDone: true },
        { id: v1(), title: "Redux", isDone: false },
    ]);

    const deleteTask = (taskId: TaskType["id"]) => {
        setTasks(tasks.filter((t) => t.id !== taskId));
    };

    const createTask = (title: TaskType["title"]) => {
        setTasks([...tasks, { id: v1(), title: title, isDone: false }]);
    };

    const onChange = (taskId: TaskType["id"], isDone: TaskType["isDone"]) => {
        setTasks(tasks.map((t) => (t.id === taskId ? { ...t, isDone } : t)));
    };

    // UI

    const [filter, setFilter] = useState<FilterType>("all");
    const changeFilter = (filter: FilterType) => setFilter(filter);

    return (
        <div className="App">
            <TodoList
                title={title_1}
                tasks={getFilteredTasks(tasks, filter)}
                deleteTask={deleteTask}
                changeFilter={changeFilter}
                createTask={createTask}
                onChangeStatus={onChange}
                filter={filter}
            />
        </div>
    );
};
