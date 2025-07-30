import prisma from "../../../lib/prisma";


export default async function User({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const userId = parseInt(id);

    const getUserRooms = await prisma.room.findMany({
        where: {
            //  assignedId: userId,
        },
        include: {
            assigned: true, // Include the assigned user details
        },
    });

};