import { Header } from "./Components/Header";
import { Home } from "./Components/Pages/Home";
import { Login } from "./Components/Pages/Login";

function App() {
  const { pathname } = window.location
  const isHome = pathname === '/'
  return (
    <>
      <Header />
      <div className="bg-[url('./assets/bg.png')] bg-cover bg-no-repeat h-screen pt-[120px]">
      {isHome ? <Home/> : <Login/>}
      
      </div>
    </>
  );
}

export default App;
