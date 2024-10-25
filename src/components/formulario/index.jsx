import { useState, useEffect } from "react"

const Formulario =() => {
    let [materiaA, setmateriaA] = useState(0);
    let [materiaB, setmateriaB] = useState(0);
    let [materiaC, setmateriaC] = useState(0);
    



    useEffect(() => {
        console.log("o componente iniciou");
    }, []);

    useEffect(() => {
        console.log("o mudou");
    }, [materiaA, materiaB]);

    const renderizaResultado= () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;



        if(media >= 7) {
            return (
                <p>aporvado</p>
            )
        }
        else{
            return (
                <p>reprovado</p>
            )
        }
    }

return(
    <form>
        <ul>
            {[1,2,3,4,5,6].map(item => <li>{item}</li>)}
        </ul>
        <input type="number" name="" id="" placeholder="nota matéria A" onChange={evento => setmateriaA(parseInt(evento.target.value))}/>
        <input type="number" name="" id="" placeholder="nota matéria B" onChange={evento => setmateriaB(parseInt(evento.target.value))}/>
        <input type="number" name="" id="" placeholder="nota matéria C" onChange={evento => setmateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}

            

    </form>
)
}
export default Formulario