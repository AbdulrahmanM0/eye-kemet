"use server";

import axiosInstance from "@/lib/axios";

export default async function handleSginin(formData) {
  const phone = formData.get("phone");

  try {
    const res = await axiosInstance.post("/send-otp", {
      phone,
    });

    return { data: res.data, status: res.status };
  } catch (error) {
    return { data: error?.response?.data, status: error?.response?.status };
  }
}