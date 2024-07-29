import React, { useEffect, useState } from 'react';

function Pokemon() {

    //Crear una PROMESA
    const [pokemon, setPokemon] = useState();
    const[id, setId] = useState(1); 

    const handleAnterior = () => {
        id > 1 && setId(id - 1);
    }

    const handleSiguiente = () => {
        setId(id + 1);
    }


    //Solo cargarlo una vez y no actualizar
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })

    }, [id])

    return (
        <div>
            {
                pokemon &&
                <div>
                    <h2>{pokemon.name}</h2>
                    <p>ID:{pokemon.id}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <br/>
                    {
                        id > 1 ? <button onClick={handleAnterior}>Anterior</button> : <button disabled>Anterior</button>
                    }
                    <button onClick={handleSiguiente}>Siguiente</button>
                </div>
            }
        </div>
    );
}

export default Pokemon;