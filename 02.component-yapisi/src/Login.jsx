import React from 'react'


export const users = [
    {
        username : "Berkay",
        password : "123"
    },
    {
        username : "Yaren",
        password : "123"
    }
]

function Login() {
  return (
    <div>
        <div>

        <div>
            <p>Kullanıcı Adınız</p>
        <input type="text" name="" id="" />
        </div>

        <div>
            <p>Şifreniz</p>
            <input type="text" name="" id="" />
        </div>

        <div>
            <button>Giriş Yap</button>
        </div>

        </div>
        
    </div>

    
  )
}

export default Login