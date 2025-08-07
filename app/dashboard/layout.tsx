'use client';
import React from "react";
import NavBar from "../components/Nav/NavBar"
import { SideBar } from "../components/SideBar"

export default function Layout({ children }: { children: React.ReactNode }) {


    return (

        <div className="h-screen">
            <NavBar />
            <h1 className="text-2xl font-bold"> Dashboard</h1>

            <SideBar />

            <div className="h-full flex justify-center mt-8">{children}</div>
        </div>
    )
}