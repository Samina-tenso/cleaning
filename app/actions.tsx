"use server";
import prisma from "./lib/prisma";
import { FormValues } from "./types/Form";
import { Suspense } from "react";





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
}


export async function deleteRoom(id: number) {
    console.log(id, 'delete room');
    const room = await prisma.room.delete({
        where: { id },
    });
    return room;
}

export async function assignRooms(roomId: number, userId: number) {
    try {
        const updatedRoom = await prisma.room.update({
            where: { id: roomId },
            data: { assignedId: userId },
        });
        console.log('Room assigned successfully:', updatedRoom);
    } catch (error) {
        console.error('Error assigning room:', error);
    }

}

