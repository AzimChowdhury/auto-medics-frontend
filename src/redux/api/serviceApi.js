
import { baseApi } from "./baseApi";

const URL = "/services";
export const serviceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getServices: build.query({
            query: (query) => ({
                url: `${URL}`,
                method: "GET",
                params: query
            })
        })
    })
})


export const {
    useGetServicesQuery
} = serviceApi