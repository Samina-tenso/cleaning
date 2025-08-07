import React from "react";
import LogoutButton from "../LogoutButton";

const NavBar = () => {
    return (
        <nav className="">
            <ul className="flex flex-row justify-end p-4 bg-white">
                <li><LogoutButton /></li>
            </ul>
        </nav>
    );
};

export default NavBar;
