import { supabase } from "./supabase";

const checkUserIsLogin = async () => {
  const { data: user } = await supabase.auth.getUser();

  return user ? true : false;
};

export default checkUserIsLogin;
