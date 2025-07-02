

import OrderedRoomsCreated from "../components/Card";

import prisma from '../lib/prisma';
import { Room } from "../types/Form";


export default async function Page() {
    const rooms: Room[] = await prisma.room.findMany();
    console.log(rooms, 'dashboard page');
    return (
        <section className="flex-col space-y-16">
            <h2>Dashboard Page</h2>




        </section>
    )


};