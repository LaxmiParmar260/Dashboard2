import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../utils/customBaseQuery";

 export const Subscription = createApi({
    reducerPath: "Subscription",
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
       
        // get 
        addSub: builder.mutation({
            query: (payload) => ({
                url: `/admin/subscriptions`,
                method: 'POST',
                body : payload
            }),
        }),
    }),
})

export const  {
    useAddSubMutation
} = Subscription
