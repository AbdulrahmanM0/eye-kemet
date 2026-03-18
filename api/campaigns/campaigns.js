"use server";

import axiosInstance from "@/lib/axios";

export default async function handleCampaigns() {
  console.log("CAPS...");
  try {
    const res = await axiosInstance.get(
      `rest/v1/smart_campaigns?tenant_id=eq.${process.env.TENANT_ID}&status=eq.active`
    );
    console.log("CAPS", res.data);
    return res.data;
  } catch (error) {
    console.error("Request failed:", error?.response?.data || error.message);
    return error?.response?.data;
  }
}