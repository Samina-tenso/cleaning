"use server";
import { success } from "better-auth";
import prisma from "../lib/prisma";
import { FormValues, OrderedRoomsCreatedProps } from "../types/Form";
import { Suspense } from "react";
import { error } from "console";
import { isActionError } from "../error";


export async function updateAssignedRooms(data: OrderedRoomsCreatedProps) {
    console.log(data, 'page update assigned rooms');
    await Promise.all(
        data.rooms.map(async (room) => {
            await prisma.room.update({
                where: {
                    id: room.id,
                },
                data: {
                    assignedId: room.assignedId,
                },
            });
        })
    );

    // assignedID undefined = NULL 

};


export async function createRooms(data: FormValues) {
    console.log(data, 'page rooms')
    const rooms = await prisma.room.createMany({
        data: [
            ...data.rooms.map((room: string) => ({
                number: room,
            })),
        ],
        skipDuplicates: true,
    });
};


export async function deleteRoom(id: string) {
    console.log(id, 'delete room');
    const room = await prisma.room.delete({
        where: { id },
    });
    return room;
};
// used?

export async function assignRooms(roomId: string, userId: string) {
    try {
        const updatedRoom = await prisma.room.update({
            where: { id: roomId },
            data: { assignedId: userId },
        });
        console.log('Room assigned successfully:', updatedRoom);
    } catch (error) {
        console.error('Error assigning room:', error);
    }

};

export async function createUser(formData: FormData) {

    const email = formData.get('email')?.toString();
    const name = formData.get('name')?.toString();
    const password = formData.get('password')?.toString();
    console.log(formData)
    if (!email || !name || !password) {
        return { error: 'Email, name, and password are required' };
    }
    try {
        const result = await prisma.user.create({
            data: {
                name,
                email,
                password,
                role: 'user', // Default role, can be changed later
            }
        });
        if (isActionError(result)) {
            return { success: false, description: result.error };
        } else {
            return {
                success: true
                , description: 'User created successfully!'
            };
        }
    } catch (error) {
        console.error('Error creating user:', error);

    }
};


