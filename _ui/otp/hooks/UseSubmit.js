"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import handleOtp from "@/api/otp/otp";
import { toast } from "react-toastify";
import { setSession } from "./setSession";
import { useRouter } from "next/navigation";

const schema = z.object({
  otp: z.string().min(6, "Invalid OTP"),
  // name: z.string().min(10, "Name must be at least 10 characters long"),
});

function UseSubmit({ phone }) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      const res = await handleOtp({
        code: String(data.otp),
        // name: String(data.name),
        phone: String(phone),
      });
      console.log("zeft", res.data)

      if (res?.error) {
        toast.error(res?.error || "An error occurred with otp response");
      } else {
        // Ressponse 
        console.log("OTP verified successfully:", res);
        if (res?.session) {
          //  start session 
          setSession({ session: res?.session });
        } else {
          console.log(res, "********")
          if (res?.needsName && !res?.customer) {
            router.push(`/signin/username?phone=${phone}&otp=${data.otp}`)
          } else {
            toast.error("Response has came without session");
          }
        }
      }
    } catch (err) {
      setError("otp", {
        type: "server",
        message: err?.message || "Something went wrong",
      });
    }
  };

  return { onSubmit, register, handleSubmit, errors, isSubmitting, control };
}

export default UseSubmit;