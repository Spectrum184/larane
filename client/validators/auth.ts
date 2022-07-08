import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('error_email'),
  password: yup
    .string()
    .required('error_password_not_null')
    .min(4, 'error_password')
    .max(100, 'error_password'),
});
