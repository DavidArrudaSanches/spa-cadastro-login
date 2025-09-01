import { useState } from 'react'

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import FormularioLogin from './components/FormularioLogin/FormularioLogin'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

function App() {

  const [tela,setTela] = useState('login')

  return (
    <main>
      <Header />
      <Menu onMenuClick={setTela}/>
 
                                                           
     {tela==='login' ? <FormularioLogin />:<FormularioCadastro/>}
    </main>
  )

 }



export default App
