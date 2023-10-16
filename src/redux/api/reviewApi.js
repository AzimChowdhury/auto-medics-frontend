import { review } from "../tag-types";
import { baseApi } from "./baseApi";

const URL = "/reviews";
export const reviewApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        postReview: build.mutation({
            query: (data) => ({
                url: `${URL}`,
                method: "POST",
                data
            }),
            invalidatesTags: [review]
        }),
        getMyReview: build.query({
            query: (email) => ({
                url: `${URL}/my-review?email=${email}`,
                method: "GET",
            }),
            providesTags: [review]
        }),
        getAllReview: build.query({
            query: () => ({
                url: `${URL}`,
                method: "GET",
            }),
            providesTags: [review]
        }),

    })
})


export const {
    usePostReviewMutation,
    useGetMyReviewQuery,
    useGetAllReviewQuery
} = reviewApi