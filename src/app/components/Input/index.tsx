'use client'
import React, { FC } from 'react';
import { useState } from 'react';
import InputCustomProps from 'app/types/Input';


import { IconButton, Input, Typography } from '../../types/tailwind_comp'

const RoomInput: React.FC<InputCustomProps> = ({ onChange, inputValue }) => {
    const [errors, setErrors] = useState({})

    return (
        <div className='w-80'>
            <Input
                type="number"
                maxLength={4}
                value={inputValue}
                label="Enter room number"
                className='appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                onChange={onChange} />

        </div>
    );


};

export default RoomInput