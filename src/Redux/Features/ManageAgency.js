import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";

export const ManageAgency = createApi({
  reducerPath: "ManageAgency",
  baseQuery: customBaseQuery,

  //  TAG TYPES ADDED
  tagTypes: ["Agency", "AgencyBooking", "AgencyActivity"],

  endpoints: (builder) => ({

    // get all agencies
    getAllAgency: builder.query({
      query: () => ({
        url: `/admin/GetAllAgenciesByStatus`,
        method: "GET",
      }),
      providesTags: ["Agency"],
    }),

    // approved
    approvedAgency: builder.mutation({
      query: (id) => ({
        url: `/admin/ApproveAgency/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Agency"],
    }),

    // reject
    rejectAgency: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/admin/RejectAgency/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Agency"],
    }),

     //  block agency
    blockAgency: builder.mutation({
      query: (id) => ({
        url: `/admin/BlockAgency/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Agency"],
    }),

    //  unblock agency
    unblockAgency: builder.mutation({
      query: (id) => ({
        url: `/admin/UnblockAgency/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Agency"],
    }),

    // approve / reject agency DOCUMENTS ✅ (NEW)
    approvedRejectAgencyDocuments: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/admin/approvedRejectAgencyDocumnets/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Agency"],
    }),

    // agency by id
    getAgencyById: builder.query({
      query: (id) => ({
        url: `/admin/GetAgencyDetails/${id}`,
        method: "GET",
      }),
      providesTags: ["Agency"],
    }),

    // booking details
    getAllBookingOfAgency: builder.query({
      query: (id) => ({
        url: `/admin/GetAllBookingofAnAgency/${id}`,
        method: "GET",
      }),
      providesTags: ["AgencyBooking"],
    }),

    // agency activity logs
    getAllActivityOfLogsOfAgency: builder.query({
      query: (id) => ({
        url: `/admin/GetAllActivityLogsofAgency/${id}`,
        method: "GET",
      }),
      providesTags: ["AgencyActivity"],
    }),
  }),
});

export const {
  useGetAllAgencyQuery,
  useApprovedAgencyMutation,
  useRejectAgencyMutation,
  useBlockAgencyMutation,
  useUnblockAgencyMutation,
  useGetAgencyByIdQuery,
  useGetAllBookingOfAgencyQuery,
  useGetAllActivityOfLogsOfAgencyQuery,
  useApprovedRejectAgencyDocumentsMutation,
} = ManageAgency;
