import { ChangeEventHandler, } from "react";
import { ChangeEvent } from "react";
import { FieldErrors } from "react-hook-form";
import { SyntheticEvent } from "react";
export interface InputProps {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
    isValid: boolean;
    errors: FieldErrors<FormValues>
};

export type FormValues = {
    rooms: string[];
}

