import Items from "./Items"

const ItemList = ({productos}) => {
    return (
        <div className="container">
            <h2 className="main-title">Productos</h2>
            <div className="productos">
                {productos.map((prod) => <Items producto={prod} key={prod.id} /> )}
            </div>
        </div>
    )
}

export default ItemList