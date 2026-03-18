"use server";

import axiosInstance from "@/lib/axios";

export default async function handleCategories() {
  try {
    const res = await axiosInstance.get(
      "rest/v1/menu_categories"
    );

    return res.data;
  } catch (error) {
    console.log(error.response,"menu_categories error");
    return error?.response?.data;
  }
}