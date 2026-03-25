"use client";

import * as React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"; // shadcn dialog

export function StatusPopup({ open=true, setOpen, title, description }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-wd700 text-white rounded-md p-6 w-[320px] flex flex-col gap-4 items-center shadow-lg">
        <DialogTitle className="text-clamp-18 font-bold">{title}</DialogTitle>
        <DialogDescription className="text-clamp-14 text-center">
          {description}
        </DialogDescription>

        <button
          className="px-6 py-2 bg-gold100 text-wd700 rounded-md hover:brightness-110 transition"
          onClick={() => setOpen(false)}
        >
          OK
        </button>
      </DialogContent>
    </Dialog>
  );
}