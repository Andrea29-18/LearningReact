import data from '../data/productos.json';


 //Crear una PROMESA
const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    });
}

export default pedirProductos;