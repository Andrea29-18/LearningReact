import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase/config";

const Checkout = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const[pedidoId, setPedidoId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        
        const pedidoRef = collection(db, "pedidos");

        addDoc(pedidoRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if(pedidoId){
        return (
            <div className="container">
                <h1 className="main-title">Gracias por tu compra!</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="container">

            <h1 className="main-title">Finalizar Comprar</h1>

            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu telefono" {...register("telefono")} />

                <button className="enviar" type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout
