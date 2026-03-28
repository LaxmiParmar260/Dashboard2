import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";

export const SystemNotification = createApi({
  reducerPath: "SystemNotification",
  baseQuery: customBaseQuery,
  
  tagTypes: ["Templates", "Triggers"],

  endpoints: (builder) => ({
    //get
    getAllTemplate: builder.query({
      query: () => ({
        url: `/admin/GetAllTemplates`,
        method: "GET",
      }),
      providesTags: ["Templates"], 
    }),

    //get template by id 
    getAllTemplateById: builder.query({
      query: (id) => ({
        url: `/admin/GetTemplateById/${id}`,
        method: "GET",
      }),
      providesTags: ["Templates"], 
    }),

    // post
    addBulkEmail: builder.mutation({
      query: (payload) => ({
        url: `/admin/SendBulkEmail`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Templates"], 
    }),

    // post
    updateTemplate: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/admin/UpdateTemplate/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Templates"], 
    }),

    //get template by id 
    getAutoTrigger: builder.query({
      query: () => ({
        url: `/admin/GetAllTriggers`,
        method: "GET",
      }),
      providesTags: ["Triggers"], 
    }),

    //assign autotrigger
    assignAutoTrigger: builder.mutation({
      query: (payload) => ({
        url: `/admin/AssignTriggerTemplate`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Triggers"], 
    }),

    //assign trigger template (same endpoint kept as you wrote)
    assignAutoTrigger: builder.mutation({
      query: (payload) => ({
        url: `/admin/AssignTriggerTemplate`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Triggers"], 
    }),

    //create template
    createTemplate: builder.mutation({
      query: (payload) => ({
        url: `/admin/CreateTemplate`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Templates"], 
    }),

    //delete template
    deleteTemplate: builder.mutation({
      query: (id) => ({
        url: `/admin/DeleteTemplate/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Templates"], 
    }),
  }),
});

export const {
  useGetAllTemplateQuery,
  useGetAllTemplateByIdQuery,
  useAddBulkEmailMutation,
  useUpdateTemplateMutation,
  useGetAutoTriggerQuery,
  useAssignAutoTriggerMutation,
  useCreateTemplateMutation,
  useDeleteTemplateMutation
} = SystemNotification;
