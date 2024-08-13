import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='container'>
            <h1 className='main-title'>Carrito</h1>
            <br />

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <h2>{prod.titulo}</h2>
                        <p> Precio Unitario: ${prod.precio}</p>
                        <p> Precio Total: ${prod.precio * prod.cantidad}</p>
                        <p> Cantidad: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                <>
                    <h2> Precio total: $ {precioTotal()}</h2>
                    <button onClick={handleVaciar}> Limpiar Carrito </button>
                    <Link to="/checkout"> Finalizar Comprar</Link>
                </> :
                <h2> El carrito está vacío </h2>
            }

        </div>
    )
}

export default Carrito
