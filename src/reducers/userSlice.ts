import { createSlice } from "@reduxjs/toolkit";
import { AppointmentsDBType } from "../../database.types";
import { apiSlice } from "../api/apiSlice";
import { supabase } from "../utils/supabase/supabase";

const initialState = {};

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableAppointments: builder.query<AppointmentsDBType[], void>({
      queryFn: async () => {
        let { data, error } = await supabase
          .from("appointments")
          .select("*")
          .eq("isReserved", false);

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

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const { useGetAvailableAppointmentsQuery } = extendedApiSlice;

export default usersSlice.reducer;
