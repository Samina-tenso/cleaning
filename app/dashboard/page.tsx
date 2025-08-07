
'use client';
import React from 'react';
import { useRouter } from "next/navigation";
import { getCurrentSession } from "../api/actions"
import { useEffect } from 'react';


export default function Page() {
    const router = useRouter();
    const [user, setUser] = React.useState<{ name: string } | null>(null);
    const [error, setError] = React.useState<string | null>(null);
    useEffect(() => {
        getCurrentSession()
            .then((result) => {
                console.log("Session result:", result);
                if (!result || !result.user) {
                    console.error("No user found in session");
                    setError("Failed to fetch session");
                    router.push('/auth/sign-in');
                } else if (result?.error) {
                    setError("Error fetching session: ")
                } else {
                    setUser({ name: result.user.name });
                }
            })
            .catch((error) => {
                console.error("Error fetching session:", error);
                setError("Failed to fetch session");
                router.push('/auth/sign-in');
            });
    }, []);

    return (

        <section className="h-screen flex items-center justify-center">
            <h2>Hello, {user?.name}! </h2>
            {error && <p className="text-red-500">{error}</p>}
        </section>
    );


};