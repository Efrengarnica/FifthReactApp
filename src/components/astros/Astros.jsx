import { useEffect, useState } from 'react'; //Para poder ocupar hook, un hook funcion predeffinida de js para trabajar con componentes
import './Astros.css'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid'

function Astro(props){
   
    return(
        <>
            <div className="card">
                <h2>{props.astro.name}</h2>
                <p>{props.astro.craft}</p>
            </div>
        </>
    );
}
function Astros(){

    const [astro, setAstro]= useState();   //Primer hook que estamos ocupando  //hook ¿que es un hook??, genero el primero despues el segundo
    const URL= "http://api.open-notify.org/astros.json";

    useEffect(() => {  //Parace que aqui se va guardar el arreglo de info de la api
        
        async function fetchData() {
            const response = await fetch(URL);
            const data= await response.json();
            setAstro(data.people);
            console.log(astro)
        }
        fetchData();
    }, []);//Para que se hagan las peticiones y se locolque alla arriba



    return(
        <>
        <Typography variant='h4'>
            Astros
        </Typography>
        <div className="astros-container">
            {   astro ? (
                astro.map((astro) =>(
                    <Astro 
                    key= {uuidv4()}
                    astro={astro}/>
                ))
                ) : (
                    <CircularProgress/>  //Esto es para que se aparezca uno icono de carga cuando la promesa tarde
                )
            }
        </div>
        </>
    )
}
    export default Astros;
    //No puede haber aqui 2 exports juntos aqui