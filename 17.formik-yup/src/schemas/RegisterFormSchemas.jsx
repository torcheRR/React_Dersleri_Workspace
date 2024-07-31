import * as yup from "yup";

export const RegisterFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email adresi giriniz.")
    .required("Email adresi zorunlu"),

  age: yup
    .number()
    .positive("Pozitif bir yaş giriniz.")
    .integer("Lütfen bir tamsayı giriniz")
    .required("Yaş alanı zorunlu"),

  password: yup.string().required("Şifre alanı zorunlu"),

  confirmPassword: yup
    .string()
    .required("Şifre tekrarı zorunlu")
    .oneOf([yup.ref("password", yup.password)],"Şifreler eşleşmiyor."),

  term: yup.boolean().required("Sözleşme onayı zorunlu."),
});
