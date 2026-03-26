"use server";

import axiosInstance from "@/lib/axios";
import { getSessionToken } from "../authinticated";

export default async function handleCart({ method = "get", formData = {} }) {
  const { customer } = await getSessionToken();

  // parse
  let customerData;
  try {
    customerData = customer?.value ? JSON.parse(customer.value) : null;
  } catch (e) {
    console.error("Failed to parse customer cookie:", e);
    customerData = null;
  }

  // no customer
  if (!customerData) {
    return { data: null, status: 401 };
  }

  const body = {
    ...formData,
    customer_id: customerData.id,
    tenant_id: process.env.TENANT_ID,
  };

  try {
    const res = await axiosInstance.post(`functions/v1/cart/${method}`, body);
    return { data: res.data, status: res.status };
  } catch (error) {
    console.error("Error:cart", error?.response?.data || error.message);
    return {
      data: error?.response?.data,
      status: error?.response?.status,
    };
  }
}