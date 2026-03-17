"use server";

import axiosInstance from "@/lib/axios";

export default async function handleOtp({ code, name, phone }) {
  try {
    const res = await axiosInstance.post("/verify-otp", {
      code,
      name,
      phone,
    });
    console.log("zeft", res.data)

    return res.data;
  } catch (error) {
    console.log("zeft", error.response)

    return error?.response?.data
  }
}