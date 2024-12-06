import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  current, // for login states in Immer
  PayloadAction,
} from "@reduxjs/toolkit";
import { AppointmentsDBType } from "../../database.types";
import { getAppointments } from "../services/appointments";
import { RootState } from "../store";
import { supabase } from "../utils/supabase/supabase";

const appointmentsAdapter = createEntityAdapter<AppointmentsDBType>();

const initialState = appointmentsAdapter.getInitialState();

export const fetchBlogs = createAsyncThunk(
  "/appointments/fetchAppointments",
  async () => {
    const response = await getAppointments();
    console.log(response);

    return response;
  },
);

// export const addNewBlog = createAsyncThunk(
//   "/blogs/addNewBlog",
//   async (initialBlog: Blog) => {
//     const response = await createBlog(initialBlog);
//     return response.data;
//   },
// );
//
// export const deleteABlog = createAsyncThunk(
//   "/blogs/deleteABlog",
//   async (initialBlogId: string) => {
//     await deleteBlog(initialBlogId);
//     return initialBlogId;
//   },
// );
//
// export const updateApiBlog = createAsyncThunk(
//   "/blogs/updateApiBlog",
//   async (initialBlog: Blog) => {
//     const response = await updateBlog(initialBlog, initialBlog.id);
//     return response.data;
//   },
// );

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        // state.status = "loading";
        // appointmentsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchBlogs.fulfilled, (state, _) => {
        // state.status = "completed";
      });
    // .addCase(fetchBlogs.fulfilled, (state, action) => {
    //   state.status = "completed";
    //   // state.blogs = action.payload;
    //   blogAdaptopr.upsertMany(state, action.payload);
    // })
    // .addCase(fetchBlogs.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = action.payload;
    // })
    // .addCase(addNewBlog.fulfilled, blogAdaptopr.addOne)
    // .addCase(deleteABlog.fulfilled, blogAdaptopr.removeOne)
    // .addCase(updateApiBlog.fulfilled, blogAdaptopr.updateOne);
  },
});

// export const {
//   selectAll: selectAllBlogs,
//   selectById: selectBlogById,
//   selectIds: selectBlogIds,
// } = blogAdaptopr.getSelectors((state: RootState) => state.blogs);

// // []: input selector => tamami parameter haye selectUserBlogs be item haye input selector ha done done dade mishe
// export const selectUserBlogs = createSelector(
//   [selectAllBlogs, (_, userId: string) => userId],
//
//   // output selector: har kodom az in item ha output e input selector ha be tartib hastand
//   (blogs: Blog[], userId: string) =>
//     blogs.filter((blog: Blog) => blog.user === userId),
// );

export default appointmentsSlice.reducer;
