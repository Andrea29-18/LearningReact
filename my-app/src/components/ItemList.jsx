// Solo recorre los productos y los muestra en pantalla

import Item from "./Item";

const ItemList = ({ productos }) => {
    return (
        <div>
            <h1>Productos</h1>

            {
                productos.length > 0 &&

                //Crear un MAP para recorrer todo el archivo JSON
                productos.map((producto) => {
                    return (
                        <Item key={producto.id} producto={producto}/>
                    )
                })

            }
        </div>
    )
};

export default ItemList;