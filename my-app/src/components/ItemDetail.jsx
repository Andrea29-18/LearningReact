
const ItemDetail = ({ item }) => {
    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.image} alt={item.title} />
                <div>
                    <h3 className="titulo">{item.title}</h3>
                    <p className="description">{item.description}</p>
                    <p className="categoria"> Categoria: {item.category} </p>
                    <p className="precio"> Precio: ${item.price} </p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail