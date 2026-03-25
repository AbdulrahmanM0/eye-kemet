"use server";

import axiosInstance from "@/lib/axios";

export default async function handleFaq(slug) {
  try {
    const res = await axiosInstance.get(`functions/v1/faq-api?tenant_id=${process.env.TENANT_ID}`);
    return res.data;
  } catch (error) {
    console.error("Blogs error:", error?.response?.data || error.message);
    return null;
  }
}