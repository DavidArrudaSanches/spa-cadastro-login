import '../Button/Button';
import Button from '../Button/Button';
import './FormularioLogin.css';

function FormularioLogin(){
    const handleSubmit=(event) =>{
        event.preventDefault()
        Swal.fire({
            title: "Bem Vindo de volta",
            text: "Dados de login encontrados ",
            icon: "Sucess"
            });
    }
    
    return(
        <form className='form-container' onSubmit={handleSubmit}>
            <h2>Acessar conta</h2>
            <div className='form-group'>
                <label htmlFor="login-email">Email</label>
                <input type="email" id="login-email" placeholder='seuemail@exemplo.com.br' required/>
            </div>
            <div className='form-group'>
                <label htmlFor="login-senha">Senha</label>
                <input type="password" id="login-senha" placeholder='Sua Senha'  required/>
            </div>
            <div className='form-actions'>
                <Button type="submit">Entrar</Button>
                <Button type="reset">Limpar</Button>
            </div>
        </form>
    )
}

export default FormularioLogin