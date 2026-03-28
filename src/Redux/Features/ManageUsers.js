import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";

export const ManageUsers = createApi({
  reducerPath: "ManageUsers",
  baseQuery: customBaseQuery,

  //  ADD TAG TYPES
  tagTypes: ["Users"],

  endpoints: (builder) => ({
    // get all users
    getAllUsers: builder.query({
      query: () => ({
        url: `/admin/GetAllUsers`,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),

    // get user details by id
    getUserDetailsById: builder.query({
      query: (id) => ({
        url: `/admin/GetAUser/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),

    // get booking data
    getBookingData: builder.query({
      query: (id) => ({
        url: `/admin/GetAllBookingOfUser/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),

    // block user
    blockUser: builder.mutation({
      query: (id) => ({
        url: `/admin/BlockUser/${id}`,
        method: "PUT",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Users", id }, "Users"],
    }),

    // unblock user
    unBlockUser: builder.mutation({
      query: (id) => ({
        url: `/admin/UnblockUser/${id}`,
        method: "PUT",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Users", id }, "Users"],
    }),

    // Activity log
    getActivityOfUser: builder.query({
      query: (id) => ({
        url: `/activity-log/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserDetailsByIdQuery,
  useGetBookingDataQuery,
  useBlockUserMutation,
  useUnBlockUserMutation,
  useGetActivityOfUserQuery
} = ManageUsers;
