
import { ListItemPrefix, Typography } from '@material-tailwind/react';
import { List, ListItem, ListItemSuffix, IconButton } from '../../types/tailwind_comp'
import { FormValues, Room } from '../../types/Form';
import prisma from '../../lib/prisma';
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
export default async function orderedRooms() {
    const rooms: Room[] = await prisma.room.findMany();

    return (
        <List>

            {rooms && (
                rooms.map((room: Room, index: number) => (
                    <ListItem ripple={false} key={index} className='py-1 pr-1 pl-4 border-b-2' >
                        {/* {users.map((u, index) => (
                            <div key={index} className="bg-{{user.color && `${user.color}}">
                                <Typography>
                                    {u.name}
                                </Typography>
                            </div>
                        ))} */}
                        <p>{room.number}</p>
                    </ListItem>
                )
                )
            )
            }
        </List>
    )
};