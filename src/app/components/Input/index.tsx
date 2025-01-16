'use client'
import React, { FC } from 'react';
import { useState } from 'react';


const Input: FC = () => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInputValue(e.target.value);
    };
    return (
        <div /*wrapper*/>
            <label htmlFor="room-input">Room input</label>
            <input type="text" placeholder='Add room numbers' value={inputValue} onChange={(event) => handleInputChange(event)}>


            </input>

        </div>

    );


};

export default Input