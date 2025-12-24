import type { ButtonComponentProps } from "./types";

export const Button = ({ title, onClick, customClass }: ButtonComponentProps) => {
    return (
        <button onClick={onClick} className={customClass}>
            {title}
        </button>
    );
};
