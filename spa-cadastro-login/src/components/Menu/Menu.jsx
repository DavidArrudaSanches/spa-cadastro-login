import '../Button/Button';
import './Menu.css';

function Menu({unMenuCLick}){
    return(
        <nav className='"app-menu'>
            
                <Button onClick={() => onMenuCLick('login')}>login</Button>
                <Button onClick={() => onMenuClick('cadastro')}>Cadastro</Button>
            
        </nav>
    )
}

export default Menu