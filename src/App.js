import React, {useState} from 'react';
import Tweet from './Tweet'
function App(){
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1)
  };
  return(
    <div className="app">
   
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>

     <Tweet name="Jon snow" message="Cuanto más le das a un rey, más quiere. Estamos caminando sobre un puente de hielo con un abismo a cada lado… Agradecer a un rey es bastante difícil, complacer a dos es casi imposible"/> 
     <Tweet name="Yoda" message="La muerte una parte natural de la vida es. Regocíjate por los que te rodean que en la Fuerza se transforman. Llorarlos no debes. Añorarlos tampoco. El apego a los celos conduce. La negra sombra de la codicia es" />
     <Tweet name="Perón" message="Ningún Peronista debe sentirse más de lo que es, ni menos de lo que debe ser. Cuando un Peronista comienza a sentirse más de lo que es, empieza a convertirse en oligarca."/>
     <Tweet name="Scooby doo" message="Scooby-Dooby the fucking Doo"/>
    </div>
  );
}

export default App; 