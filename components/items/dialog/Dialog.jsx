"use client"

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

export function DialogDemo({ open, setOpen, children, customClass }) {
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent showCloseButton={false} className={`
       bg-wd500 border-0 rounded-0 p-0 ${customClass}
      `}>
        {children}
      </DialogContent>
    </Dialog>
  )
}