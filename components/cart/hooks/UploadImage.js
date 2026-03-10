import { useEffect, useState } from "react";

export function useUploadImage() {
    const [openPictureDialog, setOpenPictureDialog] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [uploadperformance, setUploadperformance] = useState(0);

    useEffect(() => {
        if (openPictureDialog) {
            const interval = setInterval(() => {
                setUploadperformance((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval)
                        return 100
                    }
                    return prev + 1
                })
            }, 50)
            return () => clearInterval(interval)
        }
    }, [openPictureDialog])


    // handle image dialog 
    const handleImageDialog = () => {
        setOpenDialog(!openDialog)
    }

    // handle upload picture  
    const handlePicture = () => {
        setOpenPictureDialog(!openPictureDialog)
    }

    return {
        handleImageDialog, openDialog,
        handlePicture, openPictureDialog,
        uploadperformance
    }
}
