
const Items = ({producto}) => {
    return (
        <div className="producto">
            <img src={producto.image} />
            <div>
                <h4>{producto.title}</h4>
                <p>Precio: ${producto.price}</p>
                <p>Categoria: {producto.category}</p>
                <a className="ver-mas" href={`/item/${producto.id}`}> Ver más </a>
            </div>
        </div>
    )
}

export default Items
