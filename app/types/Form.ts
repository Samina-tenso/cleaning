import { ChangeEventHandler, } from "react";
import { ChangeEvent } from "react";
import { FieldErrors } from "react-hook-form";
import { SyntheticEvent } from "react";
import { UseFormSetValue } from 'react-hook-form';
import { inter } from "../fonts";


export interface InputProps {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
    isValid: boolean;
    errors: FieldErrors<FormValues>

};

export type FormValues = {
    rooms: string[];
};

export interface Room {
    id: number;
    number: string;
    assignedId?: number | null;
    assigned?: User | null;

};
export type OrderedRoomsCreatedProps = {
    rooms: Room[];
};
export interface User {
    id: number;
    email: string;
    name: string | undefined;
    role: string;
    password: string | undefined;
    rooms: Room[];
};


export type RoomsProps = {
    rooms: string[];
    setValue: UseFormSetValue<FormValues>;
};

