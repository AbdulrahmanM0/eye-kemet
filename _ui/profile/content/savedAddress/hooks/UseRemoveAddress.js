"use client"
import handleAllAddress from '@/api/proflie/AllAddress';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { toast } from 'react-toastify';

function UseRemoveAddress() {
    const [dialog, setDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const method = "delete";
    const handleDialog = () => {
        setDialog(prev => !prev)
    }

    const handleSubmit = async (id) => {
        try {
            setLoading(true)
            const res = await handleAllAddress({ params: `?id=${id}`, method });
            if (res?.data) {
                toast.success(res?.data?.message || "Deleted Succefully");
                handleDialog()
                router.refresh();
            }
        } catch (error) {
            console.error(
                "Failed to add address:",
                error?.response?.data || error.message
            );
            toast.error(error?.response?.data || error.message || "Something went wrong");
            setSubmitError(error?.response?.data || error.message);
        } finally {
            setLoading(false)
        }
    }


    return { dialog, handleDialog, handleSubmit, loading }

}

export default UseRemoveAddress