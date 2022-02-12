import * as yup from "yup";

export const RegisterFormSchema = yup.object().shape({
  userName: yup.string().required().trim().min(2).max(50),
  mobileNumber: yup.string().trim().min(10).max(10),
  email: yup.string().email(),
  password: yup.string().min(8).max(16),
  confirmPassword: yup.string().min(8).max(16)
});
