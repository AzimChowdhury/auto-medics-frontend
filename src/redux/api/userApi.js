
import { admin, customer, profile, specialist } from "../tag-types";
import { baseApi } from "./baseApi";

const URL = "/users";
export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCustomers: build.query({
            query: (query) => ({
                url: `${URL}/customers`,
                method: "GET",
                params: query
            }),
            providesTags: [customer]
        }),
        getAdmins: build.query({
            query: (query) => ({
                url: `${URL}/admins`,
                method: "GET",
                params: query
            }),
            providesTags: [admin]
        }),
        deleteAdmins: build.mutation({
            query: (data) => ({
                url: `${URL}/admin?email=${data}`,
                method: "DELETE"
            }),
            invalidatesTags: [admin]
        }),
        getSpecialists: build.query({
            query: (query) => ({
                url: `${URL}/specialists`,
                method: "GET",
                params: query
            }),
            providesTags: [specialist]
        }),
        myProfile: build.query({
            query: (query) => ({
                url: `${URL}/profile`,
                method: "GET",
                params: query
            }),
            providesTags: [profile]
        }),
        updateProfile: build.mutation({
            query: (data) => ({
                url: `${URL}/update-profile`,
                method: "PATCH",
                data: data
            }),
            invalidatesTags: [profile]
        })
    })
})


export const {
    useGetCustomersQuery,
    useGetAdminsQuery,
    useGetSpecialistsQuery,
    useMyProfileQuery,
    useUpdateProfileMutation,
    useDeleteAdminsMutation
} = userApi