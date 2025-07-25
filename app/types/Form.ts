import { ChangeEventHandler, } from "react";
import { ChangeEvent } from "react";
import { FieldErrors } from "react-hook-form";
import { SyntheticEvent } from "react";
import { UseFormSetValue } from 'react-hook-form';
import { inter } from "../fonts";

export type AssignedFormValues = {
    assignedRooms: {
        roomId: string | number;
        userId: string | number;

    }[];
};

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
    id: string | number;
    number: string
    assignedId?: string | number | null;
    assigned?: User | null;

};
export type OrderedRoomsCreatedProps = {
    rooms: Room[];
    users: User[];
};
export interface User {
    id: string | number;
    email: string;
    name: string | null;
    role: string;
    password: string | null;
    rooms?: Room[] | null; // <-- make this optional
};


export type RoomsProps = {
    rooms: string[];
    setValue: UseFormSetValue<FormValues>;
};

export type UserProps = {
    users: User[];
    setValue: UseFormSetValue<AssignedFormValues>;

}
