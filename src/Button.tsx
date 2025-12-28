import type { ButtonComponentProps } from "./types";

export const Button = ({
    title,
    onClickHandler,
    customClass,
    isDsabled,
}: ButtonComponentProps) => {
    return (
        <button
            onClick={onClickHandler}
            className={customClass}
            disabled={isDsabled}
        >
            {title}
        </button>
    );
};
