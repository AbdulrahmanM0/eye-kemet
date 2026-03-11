"use client"

import React, { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Checkbox } from "@/components/ui/checkbox"

const DEFAULT_CATEGORIES = [
    { id: "rings", label: "Rings" },
    { id: "frames", label: "Frames" },
    { id: "earings", label: "Earings" },
    { id: "necklace", label: "Necklace" },
    { id: "bracelete", label: "Bracelete" },
    { id: "keychains", label: "Key Chains" },
]

export default function DropFilter({
    title,
    values,
    categories = DEFAULT_CATEGORIES,
    onChange,
}) {
    const [checked, setChecked] = useState(
        () => Object.fromEntries(categories.map((c) => [c.id, true]))
    )

    const toggle = (id) => {
        setChecked((prev) => {
            const next = { ...prev, [id]: !prev[id] }
            onChange?.(Object.keys(next).filter((k) => next[k]))
            return next
        })
    }

    return (
        <DropdownMenu>
            {/* Trigger */}
            <DropdownMenuTrigger className="flex items-center gap-clamp-18 focus-visible:outline-none group">
                <span className="text-balance text-clamp-20 font-bold leading-none uppercase">
                    {title}
                </span>

                {/* arrow icon */}
                <svg
                    className="transition-transform duration-300 group-data-[state=open]:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.292933 5.29289C0.00694959 5.57888 -0.0786362 6.00906 0.0761363 6.38273C0.230944 6.75632 0.59556 6.99991 0.999964 6.99992L11 6.99992C11.4044 6.99992 11.769 6.75633 11.9238 6.38273C12.0786 6.00906 11.993 5.57888 11.707 5.29289L6.707 0.292886C6.31647 -0.0976235 5.68345 -0.0976333 5.29293 0.292886L0.292933 5.29289Z"
                        fill="#6B6B6B"
                    />
                </svg>
            </DropdownMenuTrigger>

            {/* Dropdown */}
            <DropdownMenuContent
                align="start"
                className="bg-dark100 border-none p-4 flex flex-col gap-clamp-20 min-w-[300px]"
            >
                {values.map((item) => (
                    <label
                        key={item.id}
                        className="flex items-center gap-4 cursor-pointer select-none"
                    >
                        <input
                            type="checkbox"
                            className="peer hidden"
                            checked={!!checked[item.id]}
                            onChange={() => toggle(item.id)}
                        />

                        <div className="h-6 w-6 border border-gray-300 rounded flex items-center justify-center transition-all duration-200 peer-checked:bg-gold100 peer-checked:border-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                className="transition-colors duration-200 text-[#292929] peer-checked:text-white fill-current"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.45975 0.292807C8.85029 -0.0975503 9.48334 -0.0976547 9.87382 0.292807C10.264 0.683296 10.2641 1.31641 9.87382 1.70687L4.33182 7.24886C4.1443 7.43629 3.88993 7.54183 3.62479 7.54183C3.35966 7.54183 3.10528 7.43629 2.91776 7.24886L0.292762 4.62386C-0.0976644 4.23342 -0.0975099 3.60033 0.292762 3.2098C0.683296 2.81929 1.31631 2.81926 1.70682 3.2098L3.62479 5.12777L8.45975 0.292807Z"
                                />
                            </svg>
                        </div>

                        <span className="text-white text-base font-light">{item.title}</span>
                    </label>
                ))}
            </DropdownMenuContent>

        </DropdownMenu>
    )
}