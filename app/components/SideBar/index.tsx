'use client'
import React from 'react';
import { SetStateAction } from 'react';
import NavLinks from '../Nav';
import Link from 'next/link';
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

        // {
        //     name: 'My rooms',
        //     // href: `/dashboard/${id}`,
        //     icon: KeyIcon,

        // },


    ];

    return (
        <aside id="default-sidebar" className="fixed  h-screen w-[64px] top-0 left-0  transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="deep-purple">
                    Sidebar
                </Typography>
            </div>
            <List>
                {links.map((link, index) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                        >

                            <ListItem className="p-0" selected={open === 1} >
                                <ListItemPrefix>
                                    <LinkIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    {link.name}
                                </Typography>
                            </ListItem>
                        </Link>
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
        </aside>
    );
}