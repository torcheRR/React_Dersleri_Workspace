import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Auth() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();
    const login=async()=>{
        try {
        const response = await signInWithEmailAndPassword(auth,email,password)
        const user = response.user;
        if(user){
            navigate("/");
        }
        } catch (error) {
            toast.error("Giriş Yapılamadı"+error.message)
        }
    }

    const register =async()=>{
        try {
            const response = await createUserWithEmailAndPassword(auth,email,password)
            const user = response.user;
            if(user){
                toast.success("kullanıcı oluşturuldu")
                setEmail("");
                setPassword("");
            }
            
        } catch (error) {
            toast.error(error.message)
        }

    }
  return (
    <div className="auth">
      <h3 className="auth-header">Giriş Yap / Kayıt Ol</h3>
      <div className="input-div">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="e-mail adres" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Şifre" />
      </div>
      <div>
        <button onClick={login} className="login-button">Giriş Yap</button>
        <button className="google-button">
          <FaGoogle
            style={{
              fontSize: "12px",
              textAlign: "center",
              margin: "-1px",
              marginRight: "0px",
            }}
          />
          oogle ile Giriş Yap
        </button>
        <button onClick={register} className="register-button">Kayıt Ol</button>
      </div>
    </div>
  );
}

export default Auth;
