"use server";

import axiosInstance from "@/lib/axios";

export default async function handleContact() {
  try {
    const res = await axiosInstance.get(
      `functions/v1/contact-form?tenant_id=${process.env.TENANT_ID}`
    );
    return res.data;
  } catch (error) {
    console.error("Request failed:", error?.response?.data || error.message);
    return error?.response?.data;
  }
}