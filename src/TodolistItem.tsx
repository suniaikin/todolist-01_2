type Props = {
	title: string
}

export type Task = {
	id: string
	title: string;
	isDone: boolean
}

export const TodolistItem = (props: Props) => {
    return (
        <div className="lists">
            <div className="list-content">
                <h3>{props.title}</h3>
                <div className="input-form">
                    <input />
                    <button>+</button>
                </div>
            </div>
            <ul>
                <li>
                    <input type="checkbox" checked={true} />{" "}
                    <span>HTML&CSS</span>
                </li>
                <li>
                    <input type="checkbox" checked={true} /><span>JS</span>
                </li>
                <li>
                    <input type="checkbox" checked={false} /><span>React</span>
                </li>
            </ul>

            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
