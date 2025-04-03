'use client';

import Image from "next/image";
import RoomInput from "./components/Input";
import RoomList from "./components/RoomList";
import React, { startTransition, useState } from 'react';
//import { createList } from "./actions";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@material-tailwind/react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
//import { FormValues } from "./types/Input";
import { FormValues } from "./types/Input";




export default function Home() {


  const [inputValue, setInputValue] = useState<string>('');

  //const [rooms, setRooms] = useState<FormData[]>([]);

  const onSubmit = (data: FormValues) => console.log(data)

  //setRooms(prevState => [...prevState, data]);


  const { pending } = useFormStatus();
  const { handleSubmit, control, setValue, watch } = useForm<FormValues>({
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


  };



  return (
    <div className="flex">
      <h2> Add List of rooms</h2>
      <RoomInput inputValue={inputValue} handleChange={handleChange} />
      <form id="roomNumbers" onSubmit={handleSubmit(onSubmit)} className=" flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Button variant="outlined" disabled={pending} onClick={handleClick} > Add room numbers</Button>
        <RoomList rooms={rooms} />
        <p aria-live="polite" className="sr-only" role="status">
        </p>
        <Button variant="gradient" type="submit" >  Sumbit Form </Button>
      </form>

    </div>
  );
}
