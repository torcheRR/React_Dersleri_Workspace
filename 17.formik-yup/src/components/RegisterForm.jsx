import React, { act } from "react";
import { useFormik } from "formik";
import { RegisterFormSchemas } from "../schemas/RegisterFormSchemas";

function RegisterForm() {
    const submit =(values,action)=>{
        console.log(values)
        setTimeout(()=>{
            action.resetForm();
        },2000)
    }
  const { values, errors, handleChange, handleSubmit, touched} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: RegisterFormSchemas,
    onSubmit:submit
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <label>E-Mail</label>
          <input
            type="text"
            id="email"
            placeholder="e-mail giriniz"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email &&touched&& <p className="input-error">{errors.email}</p>}
        </div>

        <div className="input-div" >
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="yaşınızı giriniz"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && touched&&<p className="input-error">{errors.age}</p>}
        </div>

        <div className="input-div">
          <label>Şifre</label>
          <input
            type="password"
            id="password"
            placeholder="şifre giriniz"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password &&touched&& <p className="input-error">{errors.password}</p>}
        </div>

        <div className="input-div">
          <label>Şifre Tekrar</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="şifrenizi tekrar giriniz"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword &&touched&& (
            <p className="input-error">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="input-div">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <input
              style={{ width: "13px", height: "13px" }}
              type="checkbox"
              id="term"
              value={values.term}
              onChange={handleChange}
            />
            <label>Kullanıcı sözleşmesini okudum, kabul ediyorum.</label>
          </div>
          {errors.term &&touched&& <p className="input-error">{errors.term}</p>}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button type="submit" className="saveButton">
            Kayıt Ol
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
