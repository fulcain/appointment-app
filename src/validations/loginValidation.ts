import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  phone: Yup.string().required("لطفا شماره موبایل خود را وارد کنید"),
  userName: Yup.string().required("لطفا نام کاربری خود را وارد کنید"),
});
