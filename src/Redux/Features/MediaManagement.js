import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";

export const MediaManagement = createApi({
  reducerPath: "MediaManagement",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({

    //getAllMedia
    getAllMedia: builder.query({
      query: () => ({
        url: `/admin/GetAllMedia`,
        method: "GET",
      }),
    }),

    // approved
    approveMedia: builder.mutation({
      query: (id) => ({
        url: `/admin/ApproveMedia/${id}`,
        method: "PUT",
      }),
    }),

    //reject
    rejectMedia: builder.mutation({
      query: ( id) => ({
        url: `/admin/RejectMedia/${id}`,
        method: "PUT",
        // body: payload,
      }),
    }),

     //compression Log
    getAllCompression: builder.query({
      query: () => ({
        url: `/admin/GetCompressionLogs`,
        method: "GET",
      }),
    }),


    //Slider and Banner
     getAllBanner: builder.query({
      query: () => ({
        url: `/getAllSliderBanner`,
        method: "GET",
      }),
    }),

    addBanner: builder.mutation({
      query: (payload) => ({
        url: `/addSlidersBanner`,
        method: "POST",
        body : payload
      }),
    }),


    updateBanner: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/updateSlidersBanner/${id}`,
        method: "PUT",
        body: payload,  
      }),
    }),


     deleteBanner: builder.mutation({
      query: (id) => ({
        url: `/deleteSliderBanner/${id}`,
        method: "DELETE",
       
      }),
    }),

  }),
});

export const { 
    useGetAllMediaQuery,
    useApproveMediaMutation,
    useRejectMediaMutation,
    useGetAllCompressionQuery,


    useGetAllBannerQuery,
    useAddBannerMutation,
    useUpdateBannerMutation,
    useDeleteBannerMutation


} = MediaManagement;
