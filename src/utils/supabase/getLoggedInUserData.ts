import { supabase } from "./supabase";

const getLoggedInUserData = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

export default getLoggedInUserData;
