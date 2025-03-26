import { ChangeEventHandler } from "react";
import { ChangeEvent } from "react";
import { SyntheticEvent } from "react";
interface InputCustomProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;

    inputValue: string;
};

export default InputCustomProps