"use server";

import axiosInstance from "@/lib/axios";
import { getSessionToken } from "../authinticated";

export default async function handleCheckout({ data }) {
    const { token } = await getSessionToken();

    try {
        const res = await axiosInstance.post(`functions/v1/create-public-order?tenant_id=eq.${process.env.TENANT_ID}`, {
            ...data
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                tenant_id: process.env.TENANT_ID
            },
        }
        );
        return res.data;
    } catch (error) {
        console.log("this is sthe rerror", error?.response)
        return error?.response?.data || { error: "Server error" };
    }
}