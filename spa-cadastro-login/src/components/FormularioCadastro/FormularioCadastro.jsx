import Button from '../Button/Button';
// Reutiliza os mesmos estilos do formulário de login para manter um padrão
import '../FormularioLogin/FormularioLogin.css';


function FormularioCadastro(){
   
    const handleSubmit=(event) =>{
        event.preventDefault()
        Swal.fire({
            title: "Cadastrado",
            text: "Dados de Cadastro Completo ",
            icon: "Sucess"
            });
    }

    return(
        <form className='form-container' onSubmit={handleSubmit}>
            <h2>Criar conta</h2>
            <div className='form-group'>
                <label htmlFor="cadastro-nome">Nome Completo</label>
                <input type="text" id="cadastro-nome" placeholder='Seu Nome' required/>
            </div>
            
            <div className='form-group'>
                <label htmlFor="cadastro-email">Email</label>
                <input type="email" id="cadastro-email" placeholder='seuemail@exemplo.com.br' required/>
            </div>
            <div className='form-group'>
                <label htmlFor="cadastro-senha">Senha</label>
                <input type="password" id="cadastro-senha" placeholder='Sua Senha'  required/>
            </div>
            <div className='form-group'>
                <label htmlFor="cadastro-phone">Telefone</label>
                <input type="tel" id="cadastro-phone" placeholder='(XX)XXXXX-XXXX'/>
            </div>

            <div className='form-actions'>
                <Button type="submit">Criar</Button>
                <Button type="reset">Limpar</Button>
            </div>
        </form>
    )
}

export default FormularioCadastro