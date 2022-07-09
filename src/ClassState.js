import React from "react";

// vamos a decirle a nuestra clase que extienda, herede todo lo que trae react.component 
class  ClassState extends React.Component{
    render(){
        return(
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Porfavor, write the segure code for know that wants delete</p>

                <input placeholder="código de seguridad"/>
                <button>Affirm</button>
            </div>
        );
    }
}

export { ClassState };