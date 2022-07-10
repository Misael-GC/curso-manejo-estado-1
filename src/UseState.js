import React from "react";
//desde los componentes creado como funciones podemos recibir las props

function UseState({name}){
    const [error, setError] = React.useState(false);
    return(
        <div>
            <h2>Eliminar {name}</h2>
            <p>Porfavor, write the segure code for know that wants delete</p>

            {/* llamamos al estado con esta sintaxis */}
            {error &&(
                <p>Error: el código es incorrecto</p>
            ) }

            <input placeholder="código de seguridad"/>
            <button
            //vamos actualizar al estado-> si error es false que pase a true
            onClick={()=> setError(!error)}>
            Affirm
            </button>
        </div>
    );
}

export { UseState };