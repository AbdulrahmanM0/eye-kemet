import uploadimg from "@/api/cart/uploadimg";
import { extraction_id } from "@/store/features/cart/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export function useUploadImage() {
    const [openPictureDialog, setOpenPictureDialog] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    // const [openStreem, setOpenStreem] = useState(false)
    const [uploadperformance, setUploadperformance] = useState({step:"scanning",percent:0});
    const [user, setUser] = useState("");
    const dispatch = useDispatch()

    // handle image dialog 
    const handleImageDialog = () => {
        setOpenDialog(!openDialog)
    }

    // handle streem 
    // const handleStreem = () => {
    //     setOpenStreem(!openStreem)
    // }

    // handle upload picture  
    const handlePicture = async (file) => {
        if (file) {
            if (user) URL.revokeObjectURL(user);
            setUser(URL.createObjectURL(file));
            setUploadperformance(0);
            setOpenPictureDialog(true);
            try {
                const res = await uploadimg({
                    file,
                    onProgress: (percent) => setUploadperformance(percent),
                    onComplete: (data) => {setUploadperformance(100);setOpenDialog(false);setUser(data?.result_image_url);dispatch(extraction_id(data?.extraction_id))},
                    onError: (msg) => {toast.error(msg || "There is an Error");setOpenPictureDialog(false)},
                });
            } catch (error) {
                console.log(error)
            }

        } else {
            setOpenPictureDialog(false);
        }
    }

    return {
        handleImageDialog, openDialog,
        handlePicture, openPictureDialog,
        // handleStreem, openStreem,
        user,
        uploadperformance
    }
}
