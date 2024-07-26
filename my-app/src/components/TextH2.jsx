import { useState, useEffect } from "react";

const TextH2 = () => {

    const [text, setText] = useState("");


    const handleText = (e) => {
        setText(e.target.value);
    }

    //El [] solo se muestra en mounting
    useEffect(() => {
        console.log("Componente montado!");

        //unmounting
        return() => {
            console.log("Componente desmontado!");
        }
    }, []);


     //El [algo] solo se muestra cuando se modifica algo (updating)
     useEffect(() => {
        console.log("text Modificado!");
    }, []);


    return (
        <div>
            <input type="text" onChange={handleText}/>
            <p>{text}</p>
        </div>
    )
}

export default TextH2;