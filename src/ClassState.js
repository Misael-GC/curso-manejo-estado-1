import React from "react";

//vamos a llamar a la funcion super y enviar props, parara agregarle props a this
class  ClassState extends React.Component{
    constructor(props){
        //tenemos que llamar a la función super cuando querramos modificar this en nuestra clase y que funcione
        super(props);
        this.state ={
            error: false,
        };
    }
    render(){
        return(
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Porfavor, write the segure code for know that wants delete</p>

                {this.state.error &&(
                <p>Error: el código es incorrecto</p>
            ) }

                <input placeholder="código de seguridad"/>
                <button
                //vamos a decir cual es el estado que vamos a actualizar, en este caso negar el estado anterior
                //te dejo 2 soluciones
                // onClick={() => this.setState({error: !this.state.error})}
                onClick={() => 
                this.setState(prevState => ({error: !prevState.error}))
                }
                >Affirm</button>
            </div>
        );
    }
}

export { ClassState };