import React from "react";
import { Loading } from "./Loading";
class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,//actualizar paso 1
    };
  }

  //linea 12
//   UNSAFE_componentWillMount(){
//     console.log('componentWillMount')
//   }

//   componentDidMount(){
//     console.log('componentDidMount')
//   }

componentDidUpdate(){
    console.log('actualización');

    if(!!this.state.loading){ //-------------------
        setTimeout(()=>{
            console.log("Haciendo la validación")

            this.setState({ loading:false }); //sintaxis paso 3

            console.log('terminando la validación');
        }, 3000);
    } 
} //despues de una actualización de un cambio ene el estado vamos a llamar a this.setState
// es necesario e importante encapsularlo en una condicional porque de no ser asi causamos un bucle infinito al dar click al boton
  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Porfavor, write the segure code for know that wants delete</p>

        {this.state.error && <p>Error: el código es incorrecto</p>}
        {this.state.loading && <Loading/>}

        <input placeholder="código de seguridad" />
        <button
          onClick={() => this.setState({ loading:true })} //actualización paso 2
        >
          Affirm
        </button>
      </div>
    );
  }
}

export { ClassState };

