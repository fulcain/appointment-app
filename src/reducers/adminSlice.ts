import { createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import { AppointmentsDBType, UserListDBType } from "../../database.types";
import { apiSlice } from "../api/apiSlice";
import { supabase } from "../utils/supabase/supabase";
import { supabaseAuthAdmin } from "../utils/supabase/supabaseAdmin";

const initialState = {};

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAppointments: builder.query<AppointmentsDBType[], void>({
      queryFn: async () => {
        let { data, error } = await supabase.from("appointments").select("*");

        if (error) {
          return { error: { status: "CUSTOM_ERROR", data: error } };
        }

        if (!data) {
          return { error: { status: "EMPTY_DATA", data: "No data found" } };
        }

        return { data };
      },
    }),
    getUsers: builder.query<UserListDBType[], void>({
      queryFn: async () => {
        let { data, error } = await supabase.from("user_list").select("*");

        if (error) {
          return { error: { status: "CUSTOM_ERROR", data: error } };
        }

        if (!data) {
          return { error: { status: "EMPTY_DATA", data: "No data found" } };
        }

        return { data };
      },
    }),
  }),
});

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
});

export const { useGetUsersQuery, useGetAppointmentsQuery } = extendedApiSlice;

export default adminSlice.reducer;
