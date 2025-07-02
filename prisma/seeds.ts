import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // Create users
    const users = await prisma.user.createMany({
        data: [
            { email: "alice@example.com", name: "Alice", role: "admin", password: "password1" },
            { email: "bob@example.com", name: "Bob", role: "user", password: "password2" },
            { email: "carol@example.com", name: "Carol", role: "user", password: "password3" },
            { email: "dave@example.com", name: "Dave", role: "user", password: "password4" },
        ],
        skipDuplicates: true,
    });

    // Get all users
    const allUsers = await prisma.user.findMany();

    // Create rooms and randomly assign to users
    for (let i = 1; i <= 10; i++) {
        await prisma.room.create({
            data: {
                number: `Room ${i}`,
                clean: Math.random() > 0.5,
                assignedId: allUsers[Math.floor(Math.random() * allUsers.length)].id,
            },
        });
    }
}

main()
    .then(() => {
        console.log("Seeding complete");
        return prisma.$disconnect();
    })
    .catch((e) => {
        console.error(e);
        return prisma.$disconnect();
    });
