import { admin, customer, specialist } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";
export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userSignup: build.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/signup`,
                method: "POST",
                data: data
            }),
            invalidatesTags: [admin, specialist, customer]
        }),
        createAdmin: build.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/create-admin`,
                method: "POST",
                data: data
            }),
            invalidatesTags: [admin]
        }),
        createSpecialist: build.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/create-specialist`,
                method: "POST",
                data: data
            }),
            invalidatesTags: [specialist]
        }),
        userSignin: build.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/signin`,
                method: "POST",
                data: data
            })
        })
    })
})


export const {
    useUserSignupMutation,
    useUserSigninMutation,
    useCreateAdminMutation,
    useCreateSpecialistMutation
} = authApi