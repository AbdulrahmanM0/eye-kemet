"use server";

import axiosInstance from "@/lib/axios";
import { getSessionToken } from "../authinticated";

export default async function handleAllAddress({ method, params = "" }) {
    const { token } = await getSessionToken();

    try {
        const res = await axiosInstance[method](`functions/v1/customer-addresses`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        );
        console.log("ress", res.data)
        return res.data;
    } catch (error) {
        console.log("thiss is sthe rerror", error)

        return error?.response?.data || { error: "Server error" };
    }
}