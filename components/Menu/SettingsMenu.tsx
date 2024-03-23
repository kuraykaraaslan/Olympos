'use client';
import { usePathname, useRouter } from 'next/navigation'
import React from "react";

const defaultLinks = [
    {
        name: "Teams",
        href: "/settings/team",
    },
    {
        name: "Accounts",
        href: "/settings/account",
    },
    {
        name: "Users",
        href: "/settings/users",
    },
    {
        name: "Profile",
        href: "/settings/profile",
    },
    {
        name: "Billing",
        href: "/settings/billing",
    },
    {
        name: "Notifications",
        href: "/settings/notifications",
    },
    {
        name: "Integrations",
        href: "/settings/integrations",
    },
];

const SettingsMenu = (props : {links?: {name: string, href: string}[]}) => {
    const links = props.links || defaultLinks;


    const pathname = usePathname()
    const router = useRouter()



    return (
        <>
        <ul className="text-gray-700 hidden sm:block">
            {links.map((link, index) => (
                <li key={index} className={`mt-5 cursor-pointer border-l-2 pl-2 ${pathname === link.href ? 'border-primary text-primary' : 'border-transparent'}`}>
                    <a href={link.href}>{link.name}</a>
                </li>
            ))}
        </ul>

        <select className="block sm:hidden w-full bg-white border border-gray-300 p-2 rounded-lg text-black" onChange={(e) => router.push(e.target.value)} value={pathname}>
            <option value="">Select a page</option>
            {links.map((link, index) => (
                <option key={index} value={link.href}>{link.name}</option>
            ))}
        </select>
        </>
    );

     
}

export default SettingsMenu;