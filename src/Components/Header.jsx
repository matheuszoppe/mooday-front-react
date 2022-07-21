import { PrimaryButton } from "./Buttons/PrimaryButton";

export function Header(){
  return(
    <header className="bg-zinc-900 px-[140px] w-full absolute">
      <div className="container py-5 flex items-center justify-between">
        <div className="text-zinc-100 text-3xl font-bold"><a href="/" className="cursor-pointer">Moo<span className="font-light">Day</span></a></div>
        <div className="flex items-center gap-16">
          <ul className="flex text-zinc-100 text-lg gap-8 ">
            <li><a className="border-b-2 border-zinc-900 hover:border-zinc-100 p-1" href="/">Home</a></li>            
            <li><a className="border-b-2 border-zinc-900 hover:border-zinc-100 p-1" href="/">Planos</a></li>
            <li><a className="border-b-2 border-zinc-900 hover:border-zinc-100 p-1" href="/">Tutoriais</a></li>
          </ul>
          <PrimaryButton href="/cadastro" name="Começar" />
        </div>
      </div>
    </header>
  )
}