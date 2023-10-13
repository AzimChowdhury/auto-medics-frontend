import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";
export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userSignup: build.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/signup`,
                method: "POST",
                data: data
            })
        })
    })
})


export const { userSignupMutation } = authApi