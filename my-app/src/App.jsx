import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import "./main.css"

function App() {

  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer itemId={2}/>
    </div>
  );
}

export default App;
