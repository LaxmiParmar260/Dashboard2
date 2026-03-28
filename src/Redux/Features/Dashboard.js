import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";

export const Dashboard = createApi({
    reducerPath: "Dashboard",
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        // get 
        getDashboardData: builder.query({
            query: () => ({
                url: `/superadmin/dashboard`,
                method: 'GET',
            }),
        }),

        // get agency earning data

         getAgencyEarning: builder.query({
            query: () => ({
                url: `/admin/GetDashBoardAgencyEarnings`,
                method: 'GET',
            }),
        }),

        // get independent earning data

         getIndependentEarning: builder.query({
            query: () => ({
                url: `/admin/GetDashBoardIndependentEarnings`,
                method: 'GET',
            }),
        }),


        // get recent activity

         getRecentActivity: builder.query({
            query: () => ({
                url: `/admin/AdminGetAllNotification`,
                method: 'GET',
            }),
        }),

        

    }),
})

export const {
    useGetDashboardDataQuery,useGetAgencyEarningQuery,useGetIndependentEarningQuery,useGetRecentActivityQuery
} = Dashboard
