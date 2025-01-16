import { InputHTMLAttributes } from "react";

interface listProps extends InputHTMLAttributes<HTMLInputElement> {
    room: number;
};

export default listProps