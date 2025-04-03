'use client'
import React from 'react';
import { SetStateAction } from 'react';
import NavLinks from 'app/dashboard/Nav';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    HomeIcon,
    UsersIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    PowerIcon,
    KeyIcon,
    ChatBubbleLeftRightIcon
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
export function SideBar() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: SetStateAction<number>) => {
        setOpen(open === value ? 0 : value);
    };
    const links = [
        {
            name: 'Home',
            href: '/dashboard/home',
            icon: HomeIcon
        },
        {
            name: 'Profile',
            href: '/dashboard/profile',
            icon: UserCircleIcon,
        },

        {
            name: 'Room List',
            href: '/dashboard/roomlist',
            icon: KeyIcon,

        },


    ];

    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Sidebar
                </Typography>
            </div>
            <List>
                {links.map((link, index) => {
                    const LinkIcon = link.icon;
                    return (
                        <ListItem className="p-0" selected={open === 1} key={index}>
                            <ListItemPrefix>
                                <LinkIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                {link.name}
                            </Typography>
                        </ListItem>
                    )
                })}
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <UsersIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Users
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        //users list
                        <NavLinks />
                    </AccordionBody>
                </Accordion>
                <ListItem>
                    <ListItemPrefix>
                        <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Messages
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings

                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log out

                </ListItem>
            </List>
        </Card >
    );
}