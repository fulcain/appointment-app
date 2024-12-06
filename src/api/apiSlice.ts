import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppointmentsDBType } from "../../database.types";
import { supabase } from "../utils/supabase/supabase";

export const apiSlice = createApi({
  baseQuery: fakeBaseQuery(),
  // tagTypes: ["BLOG", "USER"], // baraye bi etebar kardan cach
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
  }),
});

export const { useGetAppointmentsQuery } = apiSlice;
