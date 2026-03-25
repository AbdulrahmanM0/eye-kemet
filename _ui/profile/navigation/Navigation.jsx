"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navs } from "./profileNav";

function Navigation() {
    const pathname = usePathname();

    return (
        <section>
            <div className="border-b border-b-gray400 bg-full text-balance flex justify-center">
                {navs.map((item, index) => {
                    let isActive = false;

                    if (item.path === "/") {
                        isActive = pathname === "/profile" || pathname === "/profile/";
                    } else {
                        isActive = pathname.includes(item.path);
                    }

                    return (
                        <Link
                            href={`/profile/${item.path}`}
                            key={index + item.title}
                            className={`p-clamp-32 flex gap-clamp-14 items-center leading-[0.7] text-clamp-18 uppercase font-bold whitespace-nowrap cursor-pointer ${isActive ? "text-gold100 border-b border-b-gold100" : ""
                                }`}
                        >
                            {React.cloneElement(item.icon, {
                                className: `${item.icon.props.className} ${isActive ? "text-gold100 fill-gold100" : ""}`,
                            })}
                            <span className="md:block hidden">{item.title}</span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default Navigation;