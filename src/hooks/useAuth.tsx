import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import checkUserIsAdmin from "../utils/supabase/checkUserIsAdmin";
import { supabase } from "../utils/supabase/supabase";

type AuthTypes = {
  setUserIsLogin: Function;
  setUser: Function;
  handleClose: Function;
};

const useAuth = ({ setUserIsLogin, setUser, handleClose }: AuthTypes) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthStateChange = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const currentSession = sessionData?.session;

      if (!currentSession) {
        setUserIsLogin(false);
        navigate("/auth");
        return;
      }

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === "SIGNED_IN" && session) {
          const { user } = session;
          const userId = user?.identities?.[0]?.user_id;

          if (!userId) {
            console.error("User ID not found.");
            return;
          }

          setUser(user);
          setUserIsLogin(true);

          const isUserAdmin = await checkUserIsAdmin(userId);

          if (isUserAdmin) {
            console.log("isAdmin");
            navigate("/admin");
          } else {
            console.log("not admin");
            navigate("/user");
          }

          handleClose();
        }
      });

      return () => subscription.unsubscribe();
    };

    handleAuthStateChange();
  }, []);
};

export default useAuth;
