import type { ButtonComponentProps } from "./types";

export const Button = ({
    title,
    onClickHandler,
    customClass,
    isDisabled,
}: ButtonComponentProps) => {
    return (
        <button
            onClick={onClickHandler}
            className={customClass}
            disabled={isDisabled}
        >
            {title}
        </button>
    );
};
