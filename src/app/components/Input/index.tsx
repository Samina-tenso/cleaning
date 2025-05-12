'use client'
import React, { FC } from 'react';
import { useState } from 'react';
import { InputProps } from 'app/types/Form';


import { IconButton, Input, Typography } from '../../types/tailwind_comp'
import { Controller, useForm, useController, UseControllerProps } from 'react-hook-form';

const RoomInput: React.FC<InputProps> = ({ handleChange, inputValue, errors, isValid }) => {

    return (
        <div>
            <label >
                <Input
                    pattern='^[^\W_]{3,48}$'
                    type="number"
                    name="room"
                    maxLength={4}
                    onChange={handleChange}
                    value={inputValue}
                    label="Enter room number"
                    className='appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                    id="roomNumberInput" />
                {errors?.rooms?.type === 'pattern' && <span> No space is allowed</span>}
            </label>
        </div>
    );


};

export default RoomInput