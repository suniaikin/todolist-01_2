import type { ButtonComponentProps } from "./types";

export const Button = ({
    title,
    onClick,
    customClass,
    isDsabled,
}: ButtonComponentProps) => {
    return (
        <button onClick={onClick} className={customClass} disabled={isDsabled}>
            {title}
        </button>
    );
};
