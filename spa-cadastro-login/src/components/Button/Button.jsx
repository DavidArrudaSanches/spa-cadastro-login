import './Button.css';

function Button({children,onClick,type='button'}){
    return(
        <button type={type} className="custom-button" onClick={onClick}>
            {children}
        </button>
    )
}
export default Button

// Componente reutilizável que recebe 'children'