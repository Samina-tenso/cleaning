'use client'
import React, { FC } from 'react';
import { useState } from 'react';
import { InputProps } from 'app/types/Input';


import { IconButton, Input, Typography } from '../../types/tailwind_comp'
import { Controller, useForm, useController, UseControllerProps } from 'react-hook-form';

const RoomInput: React.FC<InputProps> = ({ handleChange, inputValue }) => {
    return (
        <div className='w-80'>
            <label >

                <Input
                    type="number"
                    name="room"
                    maxLength={4}
                    onChange={handleChange}
                    value={inputValue}
                    label="Enter room number"
                    className='appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                    id="roomNumberInput" />
            </label>
        </div>
    );


};

export default RoomInput