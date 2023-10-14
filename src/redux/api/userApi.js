
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
            })
        }),
        getAdmins: build.query({
            query: (query) => ({
                url: `${URL}/admins`,
                method: "GET",
                params: query
            })
        }),
        getSpecialists: build.query({
            query: (query) => ({
                url: `${URL}/specialists`,
                method: "GET",
                params: query
            })
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
    useUpdateProfileMutation
} = userApi