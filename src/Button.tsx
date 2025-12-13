type ButtonProps = {
    label: string;
    onClickHandler: () => void;
    disabled?: boolean
    className?: string
};

export const Button = ({
    label,
    onClickHandler,
    disabled,
    className,
}: ButtonProps) => {
    return (
        <button
            onClick={onClickHandler}
            disabled={disabled}
            className={className}
        >
            {label}
        </button>
    );
};






