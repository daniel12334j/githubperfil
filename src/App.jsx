import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import Contando from "./components/contando";
import ReposList from "./components/repoList";
import { useState } from "react";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')
return( 
  <>
  <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}></input>

  {nomeUsuario.length > 3 &&(
    <>
    <Perfil nomeUsuario={nomeUsuario}/>
    <ReposList nomeUsuario={nomeUsuario}/>
    </>
  )}
  {/* <Formulario/>
  <Contando/> */}

</>
)
}

export default App
