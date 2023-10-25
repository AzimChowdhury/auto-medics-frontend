import { bookings, customer, service, specialist, notification } from "../tag-types";
import { baseApi } from "./baseApi";

const URL = "/bookings";
export const bookingsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getBookings: build.query({
            query: (data) => ({
                url: `${URL}?role=${data?.role}&email=${data?.email}`,
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
            invalidatesTags: [bookings, service, customer, specialist, notification]
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