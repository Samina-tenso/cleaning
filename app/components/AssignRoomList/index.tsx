'use client';
import { ListItemPrefix, Select, Typography, Option } from '@material-tailwind/react';
import { List, ListItem, ListItemSuffix, IconButton } from '../../types/tailwind_comp'
import { AssignedFormValues, UserProps, Room, User, OrderedRoomsCreatedProps } from '../../types/Form';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { RoomsProps } from '../../types/Form';
import prisma from '../../lib/prisma';
import { Button } from '../../types/tailwind_comp'
import { updateAssignedRooms } from '../../api/actions';
import { useState } from 'react';

const users = [
    {
        name: 'Yunna',
        color: 'red'

    },
    {
        name: 'Yunna',
        color: 'blue'

    },
    {
        name: 'Yunna',
        color: 'yellow'

    },
]
export default function AssignRoomForm({ rooms, users }: OrderedRoomsCreatedProps) {

    const { handleSubmit, control, getValues, register, setValue, watch, formState: { isValid, errors }, } = useForm<OrderedRoomsCreatedProps>({
        defaultValues: {
            rooms: rooms || [],
            users: users || [],
        },
    });
    // suggestion: 1. create new array of rooms where values have changed. 2. remove duplications(room id, only use latest value) 3.pass to update user. 

    const handleSelect = (selectedUserId: string | undefined, roomId: string) => {
        if (!selectedUserId) return;
        console.log(`Selected user ID: ${selectedUserId} for room ID: ${roomId}`);
        if (rooms != undefined) {
            const updatedRooms = rooms;
            updatedRooms.forEach((room, i) => {
                if (room.id === roomId) {
                    return updatedRooms[i] = { ...room, assignedId: selectedUserId };
                }
                return room;
            });
            setValue("rooms", updatedRooms);
            console.log('Updated rooms:', updatedRooms);
        };
    };

    const getSelectedUser = (room: Room) => {
        if (room.assignedId != null && room.assignedId != undefined) {

            const user = users.find((user: User) => user.id.toString() === room.assignedId?.toString());
            return user ? user.id.toString() : "";

        }
        return ""; // Always return a string
    };

    return (
        <form id="assigned-rooms-form" onSubmit={handleSubmit(updateAssignedRooms)} className="flex flex-col space-y-4 p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <List className=' shadow-lg ' >
                {rooms && (
                    rooms.map((room: Room, index: number) => (
                        <ListItem ripple={false} key={room.id} className='flex space-x-8 p-4 border-b-2 ' >
                            <div className='w-1/2 flex'>
                                <p>{room.number}</p>
                            </div>
                            <Select
                                label='Assign User'
                                aria-label="Select User"
                                value={getSelectedUser(room)}
                                onChange={(value) => handleSelect(value, room.id.toString())}
                                id="user-select"
                                name={room.id.toString()}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >

                                {users.map((user: User) => (
                                    <Option key={user.id} value={user.id.toString()}>
                                        {user.name}
                                    </Option>
                                ))}

                            </Select>
                        </ListItem>
                    ))
                )}
            </List >
            <Button type="submit" variant="gradient" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Assign Rooms
            </Button>
        </form >
    )
};