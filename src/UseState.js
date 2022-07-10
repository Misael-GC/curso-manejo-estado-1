import React from "react";

function UseState({name}){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        console.log('iniciando el efecto')

        if(!!loading){
            setTimeout(()=>{
                console.log("Haciendo la validación")
    
                setLoading(false);
    
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


            {error &&(
                <p>Error: el código es incorrecto</p>
            ) }

            {loading &&(
                <p>Cargando...</p>
            ) }

            <input placeholder="código de seguridad"/>
            <button
            onClick={()=> setLoading(true)}>
            Affirm
            </button>
        </div>
    );
}

export { UseState };