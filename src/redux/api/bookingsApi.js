import { baseApi } from "./baseApi";

const URL = "/bookings";
export const bookingsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getBookings: build.query({
            query: () => ({
                url: `${URL}/all`,
                method: "GET",
            })
        })
    })
})


export const {
    useGetBookingsQuery
} = bookingsApi