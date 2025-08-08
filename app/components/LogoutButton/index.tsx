'use client';
import React, { use } from "react";
import { logoutUser } from "../../api/server";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LogoutButton = () => {
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();
    const handleLogout = async () => {
        try {
            setMessage(null);

            const { success, error } = await logoutUser();
            if (success) {
                console.log("Logout successful");
                router.replace("/auth/sign-in"); // Redirect to sign-in page after logout
            } else {
                setMessage(error || "An error occurred during logout");
                console.error("Logout failed:", error);
            }
        } catch (error) {
            console.error("An unexpected error occurred during logout:", error);
        }
    };

    return (
        <div>
            <Button variant="filled" onClick={handleLogout} className="bg-blue-500 text-white p-2 rounded">
                Logout
            </Button>
            {message && <span className="text-red-500">{message}</span>}
        </div>
    );
};

export default LogoutButton;
