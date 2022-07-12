import React from "react";

const SECURITY_CODE = 'paradigma'; //comentario

function UseState({name}){
    const [value, setValue] = React.useState(''); //comentario
    const [error, setError] = React.useState(false); //comentario
    const [loading, setLoading] = React.useState(false);

    console.log(value);

    React.useEffect(()=>{
        console.log('iniciando el efecto')

        if(!!loading){
            setTimeout(()=>{
                console.log("Haciendo la validación")

                if(value === SECURITY_CODE) {
                    setLoading(false);
                    // setError(false)
                }else{
                    setError(true)
                    setLoading(false)
                }
    
                console.log('terminando la validación');
            }, 3000);
        } 
        console.log('Terminando el efecto')
    },[loading]);
    //necesitamos el [] para que el efecto se ejecute la 1ra vez, y envolvemos a loading para que se ejecute solo cuando haya cambios en el estado de loading

    return(
        <div>
            <h2>Eliminar {name}</h2>
            <p>Porfavor, write the segure code for know that wants delete</p>


            {(error && !loading) &&(
                <p>Error: el código es incorrecto</p>
            ) }

            {loading &&(
                <p>Cargando...</p>
            ) }

            <input 
            placeholder="código de seguridad"
            value={value}
            onChange={(event=>{
            // setError(false) //no importa si ya fue false desde antes se lo vamos a reiterarar
            setValue(event.target.value)
            })}
            />
            <button
            onClick={()=> 
            {setLoading(true)
            // setError(false) //esta es la solución
            }}
            >
            Affirm
            </button>
        </div>
    );
}

export { UseState };