export const Usuario = (props) => {

    console.log(props);

    return <div>
        <h1>{props.nombre}</h1>
        <p>{props.edad}</p>
        <p>{props.nacionalidad}</p>

        <hr/>



    </div>
}
