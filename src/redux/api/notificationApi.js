
import { notification } from "../tag-types";
import { baseApi } from "./baseApi";

const URL = "/notifications";
export const NotificationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query({
            query: (email) => ({
                url: `${URL}?email=${email}`,
                method: "GET",
            }),
            providesTags: [notification]
        }),
        createNotification: build.mutation({
            query: (data) => ({
                url: `${URL}`,
                method: "POST",
                data
            }),
            invalidatesTags: [notification]
        }),

        updateNotification: build.mutation({
            query: (id) => ({
                url: `${URL}?id=${id}`,
                method: "PATCH",
            }),
            invalidatesTags: [notification]
        }),

    })
})


export const {
    useGetNotificationsQuery,
    useCreateNotificationMutation,
    useUpdateNotificationMutation
} = NotificationApi