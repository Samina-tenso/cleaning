import prisma from "../../lib/prisma";


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
    if (getUserRooms.length === 0) {
        return (
            <section className="h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold">No rooms assigned to this user.</h2>
            </section>
        );
    }
};