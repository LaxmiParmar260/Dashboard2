import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";

export const AffiliateManage = createApi({
    reducerPath: "AffiliateManage",
    baseQuery: customBaseQuery,
    tagTypes: ["Affiliates","AffiliateDetail"],
    endpoints: (builder) => ({

        // get all affiliates
        getAllAffiliates: builder.query({
            query: () => ({
                url: `/admin/GetAllAffiliates`,
                method: 'GET',
            }),
            providesTags: ["Affiliates"],
        }),

        // get affiliate detail
        GetAffiliateDetail: builder.query({
            query: (id) => ({
                url: `/admin/GetAffiliateDetail/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, id) => [
                { type: "AffiliateDetail", id },
            ],
        }),


        // get affiliate referral
        GetAffiliateReferral: builder.query({
            query: (id) => ({
                url: `/admin/GetAffiliateReferrals/${id}`,
                method: 'GET',
            }),
        }),

        // get affiliate earning history
        GetAffiliateEarningsHistory: builder.query({
            query: (id) => ({
                url: `/admin/GetAffiliateEarningsHistory/${id}`,
                method: 'GET',
            }),
        }),


        // get affiliate earning summary stats
        GetAffiliateEarningsSummary: builder.query({
            query: (id) => ({
                url: `/admin/GetAffiliateEarningsSummary/${id}`,
                method: 'GET',
            }),
        }),

        // get affiliate's recent signups
        GetRecentSignups: builder.query({
            query: (id) => ({
                url: `/admin/GetRecentSignups/${id}`,
                method: 'GET',
            }),
        }),

         // block affiliate
        BlockAffiliate: builder.mutation({
           query: (id) => ({
                url: `/admin/BlockAffiliate/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: (result, error, { id }) => [
                "Affiliates",
                { type: "AffiliateDetail", id },
            ],
        }),

        // unbolck affiliate
         UnblockAffiliate: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/admin/UnblockAffiliate/${id}`,
                method: "PUT",
                body: payload,
            }),
            invalidatesTags: (result, error, { id }) => [
                "Affiliates",
                { type: "AffiliateDetail", id },
            ],
        }),


        // get get affiliate stats
        GetAffiliateStats: builder.query({
            query: (id) => ({
                url: `/admin/GetAffiliateStats/${id}`,
                method: 'GET',
            }),
        }), 


        // get affiliate activity timeline
        GetAffiliateTimeline: builder.query({
            query: (id) => ({
                url: `/admin/GetAffiliateTimeline/${id}`,
                method: "GET",
            }),
        }),





    }),
})

export const {
    useGetAllAffiliatesQuery,useGetAffiliateDetailQuery,useGetAffiliateStatsQuery,useGetAffiliateReferralQuery,useGetAffiliateEarningsHistoryQuery,useGetAffiliateEarningsSummaryQuery,
    useBlockAffiliateMutation,useUnblockAffiliateMutation,useGetRecentSignupsQuery,useGetAffiliateTimelineQuery,

} = AffiliateManage
