import React from "react";
import { FormNotisProps } from '../types/Form'


export const FormNotis = ({ message }: FormNotisProps) => {
    if (!message) return null
    return (
        < div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive" >
            {message}
        </div >
    )

}