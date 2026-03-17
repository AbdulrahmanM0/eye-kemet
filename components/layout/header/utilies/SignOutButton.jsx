"use client";

import { deleteSession } from "@/api/authinticated";

export default function SignOutButton() {

    const handleSignOut = async () => {
        await deleteSession();
    };

    return (
        <button
            className="text-light400 text-clamp-14"
            onClick={handleSignOut}
        >
            Sign Out
        </button>
    );
}