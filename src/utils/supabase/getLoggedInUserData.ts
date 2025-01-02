import { supabase } from "./supabase";

const getLoggedInUserData = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  return user;
};

export default getLoggedInUserData;
