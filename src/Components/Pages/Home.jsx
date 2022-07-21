import { PrimaryButton } from "../Buttons/PrimaryButton";
import { SecundaryButton } from "../Buttons/SecundaryButton";
import MacBook_Mockup from "../../assets/Free_MacBook_Pro_3.png"

export function Home(){
  return(
    <div className="flex justify-center pt-32 gap-20">
      <div >
        <h1 className="pb-5 text-6xl font-bold">BEM-VINDO <br></br>A MOODAY</h1>
        <p className="pb-8 text-lg">Uma plataforma feita para te ajudar a <br></br>organizar sua rotina e tarefas diarias!</p>
        <div className="flex gap-5">
        <PrimaryButton href='/cadastro' name="Crie sua conta"/>
        <SecundaryButton href='/login' name="fazer login"/>
        </div>
      </div>
      <div >
        <img src={MacBook_Mockup} alt="" />
      </div>
    </div>
  )
}