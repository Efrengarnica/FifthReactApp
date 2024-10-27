import { StrictMode } from 'react'  //Para depurar lo que vamos haciendo, se importa esta libreria
import { createRoot } from 'react-dom/client'//Con el dom del nave vamos a poder renderizar dentro del navegador, por eso la agregamos
import App from './App.jsx' //Dentro de la misma carpeta mandamos a llamar a App.jsx
import './index.css'  //Importo hoja de estilos

createRoot(document.getElementById('root')).render(//Renderizar el div
  <StrictMode>
    <App />    
  </StrictMode>,
)
//Esto de arriba renderiza a mi componebte App
//Recordar que para que se vea en el navegador no debo de detener el servicio en el git bash
//Si vas a usar boostrap la pagina es React Bootstrap para que nuestros componentes sean responsivos