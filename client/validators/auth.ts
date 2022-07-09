import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('error_email').max(255).required('error_email'),
  password: yup
    .string()
    .required('error_password_not_null')
    .min(8, 'error_password')
    .max(100, 'error_password'),
});

export const registerSchema = yup.object({
  email: yup.string().email('error_email').max(255).required('error_email'),
  password: yup
    .string()
    .required('error_password_not_null')
    .min(8, 'error_password')
    .max(100, 'error_password'),
  name: yup.string().max(255).required('error_name_not_null'),
  confirmPassword: yup
    .string()
    .required('error_confirm_password')
    .oneOf([yup.ref('password')], 'error_confirm_password'),
});
