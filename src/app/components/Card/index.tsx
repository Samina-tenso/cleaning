'use client'
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FormValues } from "app/types/Input";
//takes room list prop
export default function RoomListCreated(roomList: FormValues) {

    const AddRooms = () => {
        return (
            <CardBody className=" space-y-4">
                <PlusIcon className="text-deep-purple-200 rounded-full bg-deep-purple-50" />
                <Typography variant="h6">
                    Add room list
                </Typography>
            </CardBody>
        )



    };

    const EditRooms = () => {
        return (
            < CardBody className=" space-y-4" >
                <PencilIcon className="text-deep-purple-200 rounded-full bg-deep-purple-50" />
                <Typography variant="h6">
                    Edit room list
                </Typography>
            </CardBody >
        )

    };


    return (
        <Card className="w-full max-w-[16rem] shadow-lg " >
            {roomList ? <EditRooms /> : <AddRooms />}
        </Card>

    )
};