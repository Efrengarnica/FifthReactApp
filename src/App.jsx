import Navbar from './components/navbar/Navbar.jsx' //Acompleta con .jsx
import Hero from './components/hero/Hero.jsx';
import Astros from './components/astros/astros.jsx';
import './App.css'

//Esto es un componente, recordar que su nombre empieza con mayus para saber que es un componenete
//Quite todo lo que me dio por default pata poder escribir mi código
function App() {
 
  const links= [{
    id:1,
    text: "home",
    link: "/"
  },
  {
    id:2,
    text: "apod",
    link: "/apod"
  },
  {
    id:3,
    text: "astros",
    link: "/astros"
  }
]; //links

  return (
    <>
    <Navbar links ={links}/>
    <Hero />
    <Astros />
    </>
  );
}

export default App;
