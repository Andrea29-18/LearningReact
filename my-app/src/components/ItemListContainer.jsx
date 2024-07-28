//Se encagar de cargar la pagina y actualizarla

import  pedirProductos  from './pedirProductos';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';

const ItemListContainer = () => { 

    //Crear un ESTADO
    const[productos, setProductos] = useState([]);

    // Crear una PROMESA con pedirProductos

    //Ejecutar la PROMESA y que no se ACTUALICE a cada RATO
    useEffect(() => {
        pedirProductos()
        .then((res) => {
            setProductos(res);
        })
    },[])

    return (
        <div>
            //Se encagar de solo MOSTRAR los productos
            <ItemList productos={productos}/>
        </div>
    )
};

export default ItemListContainer;