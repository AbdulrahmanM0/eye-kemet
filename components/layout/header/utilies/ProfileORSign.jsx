"use client";

import Link from "next/link";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignOutButton from "./SignOutButton";

function ProfileORSign({ name, value }) {

    if (name || value) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger className="px-clamp-16 py-clamp-8 bg-full border border-gray400 rounded-[2px] flex gap-clamp-8 items-center justify-center cursor-pointer outline-0">
                    {/* icon  */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16 13C18.7614 13 21 15.2386 21 18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18C3 15.2386 5.23858 13 8 13H16ZM12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3Z" fill="#AE7929" />
                    </svg>
                    {/* name and mail  */}
                    <div className="text-start">
                        <h6 className="text-clamp-12 text-balance uppercase font-bold text-light400">
                            {JSON.parse(value).name}
                        </h6>
                        <h5 className="text-clamp-12 text-balance text-gray200">
                            {JSON.parse(value).phone}
                        </h5>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-dark100  border-none p-clamp-8 flex flex-col gap-clamp-20 z-[999]">
                    <div className="p-clamp-8 hover:bg-wd600">
                        <Link className="text-light400 text-clamp-14" href="/profile">My Profile</Link>
                    </div>
                    <div className="p-clamp-8 hover:bg-wd600">
                        <Link className="text-light400 text-clamp-14" href="/settings">Settings</Link>
                    </div>
                    <div className="p-clamp-8 hover:bg-wd600">
                        <SignOutButton />
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    } else {
        return (
            <div className="w-fit hidden sm:block">
                <Link
                    href="/signin"
                    className="secondary-btn whitespace-nowrap shrink-0 !w-fit flex items-center justify-center h-full"
                >
                    Sign in
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-clamp-24 h-clamp-24"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M19 3C19.5523 3 20 3.44772 20 4V18C20 19.6569 18.6569 21 17 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H17C17.5523 19 18 18.5523 18 18V5H9C8.44772 5 8 4.55228 8 4C8 3.44772 8.44772 3 9 3H19ZM11.6172 8.07617C11.9909 7.92139 12.421 8.00697 12.707 8.29297L15.707 11.293C16.0976 11.6835 16.0976 12.3165 15.707 12.707L12.707 15.707C12.421 15.993 11.9909 16.0786 11.6172 15.9238C11.2436 15.769 11 15.4044 11 15V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V9C11 8.59558 11.2436 8.23098 11.6172 8.07617Z"
                            fill="#FEFEFE"
                        />
                    </svg>
                </Link>
            </div>
        );

    }
}

export default ProfileORSign;