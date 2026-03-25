"use client";

import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Accordion from "./Accordion";

export default function FilterDrawer({ filter_products }) {
    const [open, setOpen] = useState(false);
    const filters = filter_products?.filters;

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="default">Open Filter</Button>
            </SheetTrigger>

            <SheetContent
                side="left"
                className="
                    mt-0
                    w-80 h-full
                    flex flex-col
                    rounded-none
                    border-l border-gray400
                    bg-dark100
                    focus:outline-none
                    z-[999]
                    text-balance
                    p-clamp-8
                "
            >
                <SheetHeader>
                    <SheetTitle>
                        <div className="text-clamp-16 text-balance font-thin pt-4">
                            Filter by :
                        </div>
                    </SheetTitle>
                </SheetHeader>

                <div className="overflow-y-auto p-1">
                    <Accordion filters={filters}/>
                </div>

            </SheetContent>
        </Sheet>
    );
}