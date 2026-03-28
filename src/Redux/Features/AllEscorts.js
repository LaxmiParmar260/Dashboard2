import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";

export const ManageEscort = createApi({
  reducerPath: "ManageEscort",
  baseQuery: customBaseQuery,
  tagTypes: ["Escort"],

  endpoints: (builder) => ({
    //All Escorts
    getAllEscorts: builder.query({
      query: () => ({
        url: `/admin/getIndependentEscortsByStatus`,
        method: "GET",
      }),
      providesTags: ["Escort"],
    }),

    //approve new api
   approveEscorts: builder.mutation({
      query: ({ id, type }) => ({
        url: `/admin/approveIndependentEscort/${id}/${type}`,
        method: "PUT",
      }),
      invalidatesTags: ["Escort"],
    }),

    // reject
    rejectEscorts: builder.mutation({
      query: ({ id, payload,type }) => ({
        url: `/admin/rejectIndependentEscort/${id}/${type}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Escort"],
    }),

    //block
    blockIndependentEscort: builder.mutation({
      query: ({id,type}) => ({
        url: `/admin/BlockIndependentEscort/${id}/${type}`,
        method: "PUT",
      }),
      invalidatesTags: ["Escort"],
    }),

    //unblock
    unblockIndependentEscort: builder.mutation({
      query: ({id,type}) => ({
        url: `/admin/UnblockIndependentEscort/${id}/${type}`,
        method: "PUT",
      }),
      invalidatesTags: ["Escort"],
    }),

    // approve / reject escort documents
    approvedRejectIndependentDocument: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/admin/approveRejectIndependentDocument/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Escort"],
    }),


    // independent Escorts
    getIndependentEscort: builder.query({
      query: ({ id, type }) => ({
        url: `/admin/IndependentEscortById/${id}/${type}`,
        method: "GET",
      }),
      providesTags: ["Escort"],
    }),

    //independent booking of Escorts
    getBookingOfIndEscorts: builder.query({
      query: ({ id, type }) => ({
        url: `/admin/GetAllBookingofAIndependentEscorts/${id}/${type}`,
        method: "GET",
      }),
      providesTags: ["Escort"],
    }),

    //Get Activity
    getActivityOfIndEscorts: builder.query({
      query: (id) => ({
        url: `/admin/GetAllActivityLogsofIndependentEscort/${id}`,
        method: "GET",
      }),
      providesTags: ["Escort"],
    }),

    //Get Independent Booking
    getIndependentBooking: builder.query({
      query: (id) => ({
        url: `/booking/GetIndependentBookingDetail/${id}`,
        method: "GET",
      }),
      providesTags: ["Escort"],
    }),



    

    //Service and Rate
    getPricingAndAvailablity: builder.query({
      query: ({ id, type }) => ({
        url: `/admin/GetIndependentEscortPricingAvailability/${id}/${type}`,
        method: "GET",
      }),
      providesTags: ["Escort"],
    }),

    getEscortsByAgency: builder.query({
      query: (id) => ({
        url: `/admin/GetEscortsByAgency/${id}`,
        method: "GET",
      }),
      providesTags: ["Escort"],
    }),
  }),
});

export const {
  useGetAllEscortsQuery,
  useApproveEscortsMutation,
  useRejectEscortsMutation,
  useBlockIndependentEscortMutation,
  useUnblockIndependentEscortMutation,
  useApprovedRejectIndependentDocumentMutation,


  useGetIndependentEscortQuery,
  useGetBookingOfIndEscortsQuery,
  useGetActivityOfIndEscortsQuery,
  useGetIndependentBookingQuery,

  useGetPricingAndAvailablityQuery,
  useGetEscortsByAgencyQuery
} = ManageEscort;
