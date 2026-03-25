"use server";

import axiosInstance from "@/lib/axios";
import { getSessionToken } from "../authinticated";

export default async function handleUpdateProfile({ code, name, email, birthday, gender }) {
    const { token } = await getSessionToken();

    try {
        const res = await axiosInstance.post("functions/v1/update-customer-profile", {
            updates: {
                code,
                name,
                email,
                gender,
            }
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        );
        return res.data;
    } catch (error) {
        console.log("thiss is sthe rerror", error)

        return error?.response?.data || { error: "Server error" };
    }
}