"use server";

import axiosInstance from "@/lib/axios";

export default async function handleExclusive() {
  console.log("Start fetching data...");
  try {
    const res = await axiosInstance.get(
      `functions/v1/get-category-products?tenant_id=${process.env.TENANT_ID}`
    );
    console.log("Success! Response:", res.data); 
    return res.data;
  } catch (error) {
    console.error("Request failed:", error?.response?.data || error.message);
    return error?.response?.data;
  }
}