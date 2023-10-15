
import { service, specialist } from "../tag-types";
import { baseApi } from "./baseApi";

const URL = "/services";
export const serviceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getServices: build.query({
            query: (query) => ({
                url: `${URL}`,
                method: "GET",
                params: query
            }),
            providesTags: [service]
        }),
        createServices: build.mutation({
            query: (data) => ({
                url: `${URL}`,
                method: "POST",
                data
            }),
            invalidatesTags: [service, specialist]
        }),
        deleteService: build.mutation({
            query: (id) => ({
                url: `${URL}?id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [service]
        }),
    })
})


export const {
    useGetServicesQuery,
    useCreateServicesMutation,
    useDeleteServiceMutation
} = serviceApi