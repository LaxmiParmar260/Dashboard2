import { configureStore } from "@reduxjs/toolkit";
import { ManageEscort } from "./Features/AllEscorts";
import { ManageAgency } from "./Features/ManageAgency";

import { Subscription } from "./Features/Subscription";
import { MediaManagement } from "./Features/MediaManagement";
import { Dashboard } from "./Features/Dashboard";
import { AffiliateManage } from "./Features/AffiliateManage";
import { Login } from "./Features/Login";
import { ManageUsers } from "./Features/ManageUsers";
import { SystemNotification } from "./Features/SystemNotification";
import { AdsManage } from "./Features/AdsManage";
import { ReportsAndAnalytic } from "./Features/ReportsAndAnalytic";
import { SecurityAndCompliance } from "./Features/SecurityAndCompliance";

export const store = configureStore({
  reducer: {
    // RTK Query API reducer
    [ManageEscort.reducerPath]: ManageEscort.reducer,
    [ManageAgency.reducerPath]: ManageAgency.reducer,
    [ManageUsers.reducerPath]: ManageUsers.reducer,
    [Login.reducerPath]: Login.reducer,
    [Subscription.reducerPath]: Subscription.reducer,
    [MediaManagement.reducerPath]: MediaManagement.reducer,
    [Dashboard.reducerPath]: Dashboard.reducer,
    [AffiliateManage.reducerPath]: AffiliateManage.reducer,
    [SystemNotification.reducerPath] : SystemNotification.reducer,
    [AdsManage.reducerPath]: AdsManage.reducer,
    [ReportsAndAnalytic.reducerPath]: ReportsAndAnalytic.reducer,
    [SecurityAndCompliance.reducerPath]: SecurityAndCompliance.reducer,

  },

  // Adding the middleware for RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ManageEscort.middleware)
      .concat(ManageAgency.middleware)
      .concat(ManageUsers.middleware)
      .concat(Login.middleware)
      .concat(Subscription.middleware)
      .concat(MediaManagement.middleware)
      .concat(Dashboard.middleware)
      .concat(AffiliateManage.middleware)
      .concat(SystemNotification.middleware)
      .concat(AdsManage.middleware)
      .concat(ReportsAndAnalytic.middleware)
      .concat(SecurityAndCompliance.middleware)
});
