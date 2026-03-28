import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";

export const SecurityAndCompliance = createApi({
  reducerPath: "SecurityAndCompliance",
  baseQuery: customBaseQuery,
  tagTypes: ["IpBlock", "LoginAlerts", "GdprSettings", "AutoSuspensionRules"],
  endpoints: (builder) => ({

    blockIp: builder.mutation({
      query: (payload) => ({
        url: "/ip-block",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["IpBlock"],
    }),

    // unblock ip
unblockIp: builder.mutation({
  query: (payload) => ({
    url: "/security/unblock-ip",
    method: "POST",
    body: payload,
  }),
  invalidatesTags: ["IpBlock"],
}),


    //get all block ip
    getIpBlock: builder.query({
      query: () => ({
        url: "/getIp-block",
        method: "GET",
      }),
      providesTags: ["IpBlock"],
    }),

    // get login alerts
    getLoginAlerts: builder.query({
      query: () => ({
        url: "/login-alerts",
        method: "GET",
      }),
      providesTags: ["LoginAlerts"],
    }),

    // get auto suspension rules
    getAutoSuspensionRules: builder.query({
      query: () => ({
        url: "/auto-suspension-rules",
        method: "GET",
      }),
      providesTags: ["AutoSuspensionRules"],
    }),

    // save / update auto suspension rules
    saveAutoSuspensionRules: builder.mutation({
      query: (payload) => ({
        url: "/save_auto-suspension-rules",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["AutoSuspensionRules"],
    }),

    getGdprSettings: builder.query({
  query: () => ({
    url: "/gdpr-settings",
    method: "GET",
  }),
  providesTags: ["GdprSettings"],
}),

updateGdprSettings: builder.mutation({
  query: (payload) => ({
    url: "/gdpr-settings",
    method: "PUT",
    body: payload,
  }),
  invalidatesTags: ["GdprSettings"],
}),

  }),
});

export const {
  useBlockIpMutation,
  useUnblockIpMutation,
  useGetIpBlockQuery,
  useGetLoginAlertsQuery,
  useGetAutoSuspensionRulesQuery,
  useSaveAutoSuspensionRulesMutation,

  useGetGdprSettingsQuery,
  useUpdateGdprSettingsMutation,
} = SecurityAndCompliance;
