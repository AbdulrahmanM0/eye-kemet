"use server";

import axiosInstance from "@/lib/axios";

export default async function handleOtp({ code, name, phone }) {
  try {
    const res = await axiosInstance.post("functions/v1/verify-otp", {
      code,
      name,
      phone,
    });
    return res.data;
  } catch (error) {
    return error?.response?.data
  }
}