import { ChangeEventHandler } from "react";
import { ChangeEvent } from "react";
import { SyntheticEvent } from "react";
export interface InputProps {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
};

export type FormValues = {
    rooms: string[];
}

