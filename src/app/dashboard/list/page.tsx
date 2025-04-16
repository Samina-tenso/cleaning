'use client';

import Image from "next/image";
import RoomInput from "../../components/Input";
import RoomList from "../../components/RoomList";
import React, { startTransition, useState } from 'react';
//import { createList } from "./actions";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@material-tailwind/react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
//import { FormValues } from "./types/Input";
import { FormValues } from "app/types/Form";
import { createList } from "app/actions";
import OrderedRooms from "app/components/OrderedRooms";


export default function List() {

  const [inputValue, setInputValue] = useState<string>('');

  const onSubmit = (data: FormValues) => {
    console.log(data, 'page rooms')
    createList(data)
  }

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
    <>
      <div className="space-y-16">
        <h1> Create list of rooms</h1>
        <div className="flex space-x-8 justify-center">

          <RoomInput inputValue={inputValue} handleChange={handleChange} errors={errors} isValid={isValid} />
          <Button variant="outlined" disabled={pending || !isValid} onClick={handleClick} > Add room numbers</Button>
        </div>
        <form id="roomNumbers" onSubmit={handleSubmit(onSubmit)} className=" flex-col space-y-8 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <RoomList rooms={rooms} setValue={setValue} />
          <p aria-live="polite" className="sr-only" role="status">
          </p>
          <Button variant="gradient" type="submit" >  Sumbit room list </Button>
        </form>

      </div>


      <OrderedRooms />
    </>
  );
}
