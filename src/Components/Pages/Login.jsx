import Iphone_Mockup from "../../assets/iPhone-12.png";
import Form from "../Form";
import { React, useState } from "react";

const loginForm = [
  {
    id: "email",
    type: "email",
    placeholder: "Ex: seuemail@email.com",
    title: "Email",
  },
  {
    id: "password",
    type: "password",
    placeholder: "••••••",
    title: "Senha",
  },
];

const cadastroForm = [
  {
    id: "nome",
    type: "text",
    placeholder: "Seu nome completo",
    title: "Nome",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Ex: seuemail@email.com",
    title: "Email",
  },
  {
    id: "password",
    type: "password",
    placeholder: "••••••",
    title: "Senha",
  },
  {
    id: "repeat-password",
    type: "password",
    placeholder: "",
    title: "Confirme a senha",
  },
];

export function Login() {
  const pathname = window.location.pathname.replace('/','');
  const [formType, setFormType] = useState(pathname);
  

  console.log(pathname)

  function handleClick(event) {
    setFormType(event.target.innerText.toLowerCase());
  }
  const isLogin = formType === "login";
  return (
    <div className="flex items-center justify-center gap-16 pt-16">
      <div>
        <img src={Iphone_Mockup} alt="" />
      </div>
      <div className="w-[300px] mr-20">
        <div className="flex items-center gap-4">
          <a
            onClick={handleClick}
            className="text-2xl font-bold pb-5 cursor-pointer transition-colors"
            style={{ color: isLogin ? "rgb(59 130 246)" : "rgb(100 116 139)" }}
          >
            Login
          </a>
          <span className="text-2xl font-bold pb-5">|</span>
          <a
            onClick={handleClick}
            className="text-2xl font-bold pb-5 cursor-pointer transition-colors"
            style={{ color: isLogin ? "rgb(100 116 139)" : "rgb(59 130 246)" }}
          >
            Cadastro
          </a>
        </div>
        {isLogin ? <Form inputs={loginForm} /> : <Form inputs={cadastroForm} />}

        <span
        className="text-center block pt-2"
        style={{display: !isLogin ? 'none' : 'block' }}
        >
          <a
          href="#"
          className="underline underline-offset-2"
          >
            Esqueci minha senha
          </a>
        </span>
      </div>
    </div>
  );
}
