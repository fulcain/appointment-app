import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase/supabase";

const useUserIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: profiles, error } = await supabase
        .from("profiles")
        .select("*");

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.identities) {
        const userId: string = user?.identities[0].user_id;

        const userInProfiles = profiles?.find((profile) => {
          return profile.id === userId;
        });

        if (userInProfiles) {
          const isUserAdmin = Boolean(userInProfiles.isAdmin);

          setIsAdmin(isUserAdmin);
        }
      }
    })();
  }, []);

  return isAdmin;
};

export default useUserIsAdmin;
