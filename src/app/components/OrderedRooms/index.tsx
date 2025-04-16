'use client'
import { ListItemPrefix, Typography } from '@material-tailwind/react';
import { List, ListItem, ListItemSuffix, IconButton } from '../../types/tailwind_comp'
const rum = ['134', '1241', '245', '35', '345', '435'];
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

export default function OrderedRooms() {

    return (
        <List>
            {rum && (
                rum.map((r, index) => (
                    <ListItem ripple={false} key={index} className='py-1 pr-1 pl-4 border-b-2' >
                        {users.map((u, index) => (
                            <div key={index} className="bg-{{user.color && `${user.color}}">
                                <Typography>
                                    {u.name}
                                </Typography>
                            </div>
                        ))}
                        <p>{r}</p>
                    </ListItem>
                )
                )
            )
            }
        </List>
    )
}