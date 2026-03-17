import UseSubmit from "@/_ui/auth/signin/hooks/UseSubmit"
import { useState } from "react";

function UseResend({ phone }) {
    const { handleSubmit, onSubmit, setValue, isSubmitting, time, setTime } = UseSubmit({ phone });

    const handleResend = (e) => {
        e.preventDefault();
        setValue("phone", phone);
        handleSubmit(onSubmit)();
    };

    return {
        time, setTime, handleResend, isSubmitting
    }
}

export default UseResend