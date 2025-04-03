
import React, { FC } from 'react';
import { FormValues } from 'app/types/Input';
import { List, ListItem, ListItemSuffix, IconButton } from '../../types/tailwind_comp'
import { TrashIcon } from '@heroicons/react/24/outline';


const RoomList: FC<FormValues> = ({ rooms }) => {
    return (
        <List>
            {rooms && (
                rooms.map((r, index) => (
                    <ListItem ripple={false} key={index} className='py-1 pr-1 pl-4'>
                        <p>{r}</p>
                        <ListItemSuffix className="ml-auto grid place-items-center justify-self-end">
                            <IconButton variant="text" color="blue-gray" className="flex items-center gap-3">
                                <TrashIcon />
                            </IconButton>
                        </ListItemSuffix>
                    </ListItem>
                )
                )
            )
            }
        </List>
    );
};
export default RoomList