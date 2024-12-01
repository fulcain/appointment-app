import { supabase } from "./supabase";

// Function to check if a user is an admin
const checkUserIsAdmin = async (userId: string) => {
  try {
    const { data: profiles, error } = await supabase
      .from("profiles")
      .select("isAdmin")
      .eq("id", userId);

    if (error) {
      console.error("Error fetching profiles:", error);
      return;
    }

    const isUserAdmin = profiles?.[0]?.isAdmin;
    return isUserAdmin;
  } catch (err) {
    console.error("An error occurred while checking admin status:", err);
  }
};

export default checkUserIsAdmin;
