import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";

export const AdsManage = createApi({
    reducerPath: "AdsManage",
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        // get all ads
        getAllAds: builder.query({
            query: () => ({
                url: `/ads/all`,
                method: 'GET',
            }),
        }),
    }),
})

export const {
    useGetAllAdsQuery,
} = AdsManage
