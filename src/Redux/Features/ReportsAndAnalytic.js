import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";

export const ReportsAndAnalytic = createApi({
    reducerPath: "ReportsAndAnalytic",
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

         //  Get total profile views (optional escort_id)
    getTotalProfileViewsDetails: builder.query({
      query: (params = {}) => {
        const query = new URLSearchParams(params).toString();
        return {
          url: `/admin/GetTotalProfileViews${query ? `?${query}` : ""}`,
          method: "GET",
        };
      },
    }),

    //  Get profile views over time (optional escort_id)
    getProfileViewsOverTime: builder.query({
      query: (params = {}) => {
        const query = new URLSearchParams(params).toString();
        return {
          url: `/admin/GetProfileViewsOverTime${query ? `?${query}` : ""}`,
          method: "GET",
        };
      },
    }),

        //get escort performance data
        getEscortPerformanceData: builder.query({
        query: (escort_id) => ({
            url: escort_id
            ? `/admin/GetEscortPerformance?escort_id=${escort_id}`
            : `/admin/GetEscortPerformance`,
            method: "GET",
        }),
        }),

        //get bookingtrends data 

        getBookingTrendByEscort: builder.query({
        query: (escort_id) => ({
            url: escort_id
            ? `/admin/GetBookingTrendByEscort?escort_id=${escort_id}`
            : `/admin/GetBookingTrendByEscort`,
            method: "GET",
        }),
        }),

        //get views and booking data
        getViewsVsBookingsByEscort: builder.query({
        query: (escort_id) => ({
            url: escort_id
            ? `/admin/GetViewsVsBookingsByEscort?escort_id=${escort_id}`
            : `/admin/GetViewsVsBookingsByEscort`,
            method: "GET",
        }),
        }),



        /* ---------------- BOOKING SUMMARY ---------------- */
    getBookingSummary: builder.query({
      query: (params = {}) => {
        const query = new URLSearchParams(params).toString();
        return {
          url: `/admin/GetBookingSummary${query ? `?${query}` : ""}`,
          method: "GET",
        };
      },
    }),

    /* ---------------- BOOKINGS OVER TIME ---------------- */
    getBookingsOverTime: builder.query({
      query: (params = {}) => {
        const query = new URLSearchParams(params).toString();
        return {
          url: `/admin/GetBookingsOverTime${query ? `?${query}` : ""}`,
          method: "GET",
        };
      },
    }),

    /* ---------------- BOOKING STATUS DISTRIBUTION ---------------- */
    getBookingStatusDistribution: builder.query({
      query: (params = {}) => {
        const query = new URLSearchParams(params).toString();
        return {
          url: `/admin/GetBookingStatusDistribution${query ? `?${query}` : ""}`,
          method: "GET",
        };
      },
    }),



    // ✅ Countries
    getCountries: builder.query({
      query: () => ({ url: `/countries`, method: "GET" }),
    }),

    // ✅ States by Country ID
    getStatesByCountry: builder.query({
      query: (countryId) => ({
        url: `/states?country=${countryId}`,
        method: "GET",
      }),
    }),

    // ✅ Cities by State ID
    getCitiesByState: builder.query({
      query: (stateId) => ({
        url: `/cities?state=${stateId}`,
        method: "GET",
      }),
    }),
    

     /* ---------------- ALL COUNTRIES AND CITIES ---------------- */
        getAllCountryAndCity: builder.query({
            query: (countryId) => ({
                url: countryId
                ? `/admin/GetAllCountryandstatecity?country=${countryId}`
                : `/admin/GetAllCountryandstatecity`,
                method: "GET",
            }),
            }),

        /* ---------------- TOP CITIES BY VIEWS ---------------- */
        getTopCitiesByViews: builder.query({
            query: (params = {}) => {
                const query = new URLSearchParams(params).toString();
                return { url: `/admin/GetTopCitiesByViews${query ? `?${query}` : ""}`, method: "GET" };
            },
        }),

        getTopCitiesByBookings: builder.query({
        query: (params = {}) => {
            const query = new URLSearchParams(params).toString();
            return {
            url: `/admin/GetTopCitiesByBookings${query ? `?${query}` : ""}`,
            method: "GET",
            };
        },
        }),

   
       



    }),
})

export const {
    useGetTotalProfileViewsDetailsQuery,useGetProfileViewsOverTimeQuery,useGetEscortPerformanceDataQuery,useGetBookingTrendByEscortQuery,useGetViewsVsBookingsByEscortQuery, useGetBookingSummaryQuery,
  useGetBookingsOverTimeQuery,
  useGetBookingStatusDistributionQuery,useGetCountriesQuery,
  useGetStatesByCountryQuery,
  useGetCitiesByStateQuery,useGetAllCountryAndCityQuery,
    useGetTopCitiesByViewsQuery,
    useGetTopCitiesByBookingsQuery,
} = ReportsAndAnalytic
