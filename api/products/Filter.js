"use server";

import axiosInstance from "@/lib/axios";

export default async function handleFilter() {
  try {
    const res = await axiosInstance.get(
      `functions/v1/get-category-products?tenant_id=${process.env.TENANT_ID}`
    );

    return res.data;
  } catch (error) {
    console.log(error.response,"get-category-products error");
    return error?.response?.data;
  }
}