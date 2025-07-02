
import React, { FC } from 'react';
import { FormValues } from '../../types/Form';
import { List, ListItem, ListItemSuffix, IconButton } from '../../types/tailwind_comp'
import { UseFormSetValue } from 'react-hook-form';
import { TrashIcon } from '@heroicons/react/24/outline';
import { RoomsProps } from '../../types/Form';




const RoomList: React.FC<RoomsProps> = ({ rooms, setValue }) => {



    const handleDelete = (index: number) => {
        console.log(rooms)
        console.log(index)
        let roomArray = rooms.filter((r, i) => i !== index);
        setValue("rooms", roomArray, { shouldValidate: true });
    };

    return (
        <List>
            {rooms && (
                rooms.map((r, index) => (
                    <ListItem ripple={false} key={index} className='py-1 pr-1 pl-4 border-b-2' >
                        <p>{r}</p>
                        <ListItemSuffix onClick={() => handleDelete(index)} className="ml-auto grid place-items-center justify-self-end" >
                            <IconButton variant="text" color="blue-gray" className="flex items-center gap-3 ">
                                <TrashIcon className='w-6' />
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