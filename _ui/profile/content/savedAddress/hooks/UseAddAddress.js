"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import handleAddress from "@/api/proflie/Address";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// schema
const addressSchema = z.object({
  id: z.string().optional(),
  label: z.string().min(1, "Label is required"),
  address: z.string().min(1, "Address is required"),
  street: z.string().min(1, "Street is required"),
  building_number: z.string().regex(/^[0-9]+$/, "Must be a number"),
  floor: z.string().regex(/^[0-9]+$/, "Must be a number"),
  is_default: z.boolean(),
});

function UseAddAddress({ label, address, street, building_number, floor, is_default, id, method }) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      id: id || "",
      label: label || "",
      address: address || "",
      street: street || "",
      building_number: building_number || "",
      floor: floor || "",
      landmark: "",
      latitude: "",
      longitude: "",
      country_code: "",
      is_default: is_default || false,
    },
  });

  const [submitError, setSubmitError] = useState(null);

  const onSubmit = async (data) => {
    setSubmitError(null);
    try {
      const res = await handleAddress({ data, method });
      toast.success(res?.data?.message || "Done successfully.");
      router.push("/profile/address");
      router.refresh();
      // reset(); 
    } catch (error) {
      console.error(
        "Failed to add address:",
        error?.response?.data || error.message
      );
      toast.error(error?.response?.data || error.message || "Something went wrong");
      setSubmitError(error?.response?.data || error.message);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    submitError,
  };
}

export default UseAddAddress;