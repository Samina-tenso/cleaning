'use server'
import AssignRoomList from '../../components/AssignRoomList';
import prisma from '../../lib/prisma';
import { Room, User } from '../../types/Form';


export default async function AssignPage() {
    const rooms: Room[] = await prisma.room.findMany();
    const users: User[] = await prisma.user.findMany();


    return (
        <section>
            <h1 > Assigned rooms</h1>
            <AssignRoomList rooms={rooms} users={users} />
        </section>
    );
};
