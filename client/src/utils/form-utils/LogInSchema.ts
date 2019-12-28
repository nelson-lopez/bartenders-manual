import * as Yup from "yup";

export const LogInSchema = Yup.object().shape({
  username: Yup.string()
    .max(20, "Username is too long!")
    .min(2, "Username is too short!"),
  password: Yup.string()
    .max(20, "Password is too short!")
    .min(2, "Password is too long")
});
