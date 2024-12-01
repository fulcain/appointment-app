import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import checkUserIsAdmin from "../checkUserIsAdmin";
import getLoggedInUserData from "../getLoggedInUserData";

const useRedirectLoggedInUser = async () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const userData = await getLoggedInUserData();

      if (!userData) return;

      const userId = userData?.id;

      const isUserAdmin = await checkUserIsAdmin(userId as string);

      if (isUserAdmin) {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    })();
  }, []);
};

export default useRedirectLoggedInUser;
