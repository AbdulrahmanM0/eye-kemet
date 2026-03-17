"use server";

import axiosInstance from "@/lib/axios";

export default async function handleDeals() {
  try {
    const res = await axiosInstance.get(
      "/menu_items_with_category?is_featured=eq.true&is_available=eq.true&deleted_at=is.null&limit=10"
    );
    console.log(res,"resssssss")
    return res.data;
  } catch (error) {
    console.log(error.response,"resssssss2");
    return error?.response?.data;
  }
}