'use client'
import React from "react";
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
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
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { de } from "zod/locales";

//import users 
//import rooms
const links = [
    {
        name: 'Una',
        href: '/dashboard/user/id',
        //icon: user profile photo
    },
    {
        name: 'Ynnua',
        href: '/dashboard/user/id',
        //icon:  user profile photo
    }

];

const SidebarNavLinks = () => {
    return (
        <List className="p-0">
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                >
                    <ListItem>
                        <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        {link.name}
                    </ListItem>
                </Link>
            ))}
        </List>
    )
};

export default SidebarNavLinks;