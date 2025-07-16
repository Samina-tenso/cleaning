'use client';
import RoomInput from "../../components/Input";
import RoomList from "../../components/RoomList";
import React, { startTransition, useState } from 'react';
//import { createList } from "./actions";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@material-tailwind/react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
//import { FormValues } from "./types/Input";
import { FormValues } from "../../types/Form";
import prisma from "../../lib/prisma";
import { createRooms } from "../../actions";




export default function List() {

  const [inputValue, setInputValue] = useState<string>('');



  const { pending } = useFormStatus();
  const { handleSubmit, control, setValue, watch, formState: { isValid, errors }, } = useForm<FormValues>({
    defaultValues: { rooms: [] },
  });

  const rooms = watch('rooms');

  const handleChange: React.ComponentProps<"input">["onChange"] = (e) => {
    e.preventDefault()
    setInputValue(e.target.value);
  };

  const handleClick: React.ComponentProps<"button">["onClick"] = (e) => {
    e.preventDefault()
    setValue("rooms", [...rooms, inputValue]);
    setInputValue('')
    console.log(rooms)
  };



  return (

    <div className="flex-col space-y-8 font-[family-name:var(--font-geist-sans)] ">
      <h1> Create list of rooms</h1>

      <form id="roomNumbers" onSubmit={handleSubmit(createRooms)} className=" flex-col space-y-4   border  m-w-sm rounded-lg shadow-sm  p-4  dark:bg-gray-800 dark:border-gray-700  ">
        <RoomList rooms={rooms} setValue={setValue} />
        <p aria-live="polite" className="sr-only" role="status">
        </p>
        <RoomInput inputValue={inputValue} handleChange={handleChange} errors={errors} isValid={isValid} />
        <div className="space-x-8 flex ">
          <Button variant="outlined" disabled={pending || !isValid || !inputValue.trim()} onClick={handleClick} > Add room numbers</Button>

          <Button variant="gradient" type="submit" >  Sumbit room list </Button>


        </div>
      </form >
    </div >

  );
}
