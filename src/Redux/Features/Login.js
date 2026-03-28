import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";
import Cookies from "js-cookie";

export const Login = createApi({
  reducerPath: "Login",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: `/superadmin/auth/login`,
        method: "POST",
        body: payload,
      }),

      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set("token", data.token, {
            expires: 7,        // 7 days
            secure: true,      // HTTPS only
           
          });

        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = Login;
