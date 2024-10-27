//Para vincular una hoja de estilos con un componente
import './Navbar.css'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';//Esto una vez hecho el codigo en gitbash entonces ocupo este import del icon
function Navbar(props) {  //props habla de las propiedades de un componente
//console.log(props.links);
const linksZ=props.links;  //Checa como esta relacionado con App.
//console.log(links);
    return (
        <>
        <nav>
            <div>
                <RocketLaunchIcon/>
                <h2>space-app</h2>
            </div>
            <div>
            {
             linksZ.map(link => (  //Necesito que me regrese un arrgelo para que se imprima, si usos forEach No funciona ya que no me regresa un
                <button key={link.id}>       
                    <a href="{link.link}">{link.text}</a>
                </button>
             ))   
            }
            </div>
        </nav>
        
        </>
    )
}
export default Navbar;  //Exporto despues de realizar la funcion