"use server";
import { auth } from "../lib/auth";
import prisma from "../lib/prisma";
import { FormValues, OrderedRoomsCreatedProps } from "../types/Form";
import { Suspense } from "react";
import { error } from "console";
import { isActionError } from "../error";
import { headers } from "next/headers";


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

export async function signInUser(email: string, password: string) {
    try {
        await auth.api.signInEmail({
            body: {
                email: email,
                password: password,
                callbackURL: '/sign-in'
            }
        });
        return {
            success: true,
            message: "User has been signed in!"
        };
    } catch (error) {
        const e = error as Error;
        console.log(e);
        return {
            success: false,
            error: e.message || 'Server error'
        }
    }
};

export async function signUpUser(name: string, email: string, password: string) {
    try {
        await auth.api.signUpEmail({
            body: {
                name: name,
                email: email,
                password: password
            }
        })
        return {
            success: true,
        };
    } catch (error) {
        const e = error as Error;
        console.log(e);
        return {
            success: false,
            error: e.message || 'Server error'
        }
    }
};
export async function getCurrentSession() {
    try {
        console.log(await headers(), 'headers in getCurrentSession');

        const session = await auth.api.getSession({
            headers: await headers(),

        });
        if (session) {
            return { user: session.user, error: null };
        }
    } catch (error) {
        console.error('Error fetching session:', error);
        return { user: null, error: 'Failed to fetch session' };
    }
};

export async function logoutUser() {
    try {
        await auth.api.signOut({
            headers: await headers(),
        });
        return {
            success: true,
            message: "User has been logged out!"
        };
    } catch (error) {
        const e = error as Error;
        console.log(e);
        return {
            success: false,
            error: e.message || 'Server error'
        }
    }
}