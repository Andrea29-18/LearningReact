import { Card } from './components/Card/Card';
import { Usuario } from './components/Usuario/Usuario';

function App() {

  return (
    <div>
      <Usuario nombre="Pucheta" edad={22} nacionalidad="México"/>
      <Usuario nombre="Vargas" edad={23} nacionalidad="Xalapa"/>
      <Card/>
    </div>
  );
}

export default App;
