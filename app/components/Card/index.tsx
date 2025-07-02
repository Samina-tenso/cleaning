'use client'
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FormValues, Room } from "../../types/Form";
import { OrderedRoomsCreatedProps } from "../../types/Form";



//takes room list prop
export default function OrderedRoomsCreated({ rooms }: OrderedRoomsCreatedProps) {

    const AddRooms = () => {
        return (
            <CardBody className=" space-y-4">
                <PlusIcon className="text-deep-purple-200 rounded-full bg-deep-purple-50" />
                <Typography variant="h6">
                    Create room list
                </Typography>
            </CardBody>
        )
    };
    //add link route 
    const OrderedRoomsList = () => {
        return (
            < CardBody className=" space-y-4" >
                <PencilIcon className="text-deep-purple-200 rounded-full bg-deep-purple-50" />
                <Typography variant="h6">
                    Ordered Rooms
                </Typography>
            </CardBody >
        )

    };


    return (
        <Card className="w-full max-w-[16rem] shadow-lg " >
            {rooms?.length ? <OrderedRoomsList /> : <AddRooms />}
        </Card>

    )
};