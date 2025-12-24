import type { ButtonComponentProps } from "./types";

export const Button = ({ title, onClick }: ButtonComponentProps) => {
    return <button onClick={onClick}>{title}</button>;
};
