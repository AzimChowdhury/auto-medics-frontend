import { bookings, customer, service, specialist } from "../tag-types";
import { baseApi } from "./baseApi";

const URL = "/bookings";
export const bookingsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getBookings: build.query({
            query: () => ({
                url: `${URL}/all`,
                method: "GET",
            }),
            providesTags: [bookings]
        }),
        createBookings: build.mutation({
            query: (data) => ({
                url: `${URL}`,
                method: "POST",
                data
            }),
            invalidatesTags: [bookings, service, customer, specialist]
        }),
        deleteBookings: build.mutation({
            query: (id) => ({
                url: `${URL}?id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [bookings, service, specialist, customer]
        }),
    })
})


export const {
    useGetBookingsQuery,
    useDeleteBookingsMutation,
    useCreateBookingsMutation
} = bookingsApi