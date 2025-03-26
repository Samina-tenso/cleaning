'use client';

import Image from "next/image";
import RoomInput from "./components/Input";
import RoomList from "./components/RoomList";
import React, { useState } from 'react';
import { createList } from "./actions";


//import { Button } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import type { ListProps } from "@material-tailwind/react";



export default function Home() {


  const [inputValue, setInputValue] = useState<string>('');

  const [rooms, setRooms] = useState<string[]>([]);
  const initialState = {
    message: "",
  };


  const onChange: React.ComponentProps<"input">["onChange"] = (e) => {
    e.preventDefault()
    setInputValue(e.target.value);
  };

  const onClick: React.ComponentProps<"button">["onClick"] = (e) => {

    e.preventDefault()
    setRooms(prevState => [...prevState, inputValue]);
    setInputValue('')
  };


  return (
    <div className="flex">

      <form name="room_numbers" /* action={createList} */ className=" flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <label htmlFor="roomList"> Add List of rooms</label>
        <RoomInput onChange={onChange} inputValue={inputValue} />
        <Button variant="outlined" onClick={onClick} disabled={!inputValue}> Add room numbers</Button>
        <RoomList rooms={rooms} />
        <Button type="submit" variant="gradient" disabled={!rooms}>  Sumbit Form </Button>
        <p aria-live="polite" className="sr-only" role="status">

        </p>
      </form>
    </div>
  );
}
