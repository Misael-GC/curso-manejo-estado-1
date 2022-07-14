import React from "react";

const SECURITY_CODE = 'paradigma'; 

function UseState({name}){
    const [state, setState]=React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    });

    const onConfirm = () =>{
        setState({ //actualizador --------
            ...state, //solución conexión al estado
            error: false,
            loading:false,
            confirmed:true,
        });
    }

    const onError = () => {
        setState({ //actualizador --------
            ...state, //solución conexión al estado
            error:true,
            loading:false,
        })
    }

    const onWrite = (newValue) =>{
        setState({ 
            ...state, 
                value:newValue,
            });
    }

    const onCheck = ()=>{
        setState({ //actualizador --------
            ...state, //solución conexión al estado
                loading:true,
            });
    }

    const onDelete = () => {
        setState({ 
            ...state,
            deleted: true,
         })
    }

    const onReset = () => {
        setState({ 
            ...state,
            confirmed: false,
            deleted: false,
            value:'',
         })
    }

    React.useEffect(()=>{
        console.log('iniciando el efecto')

        if(!!state.loading){ //actualizador 2
            setTimeout(()=>{
                console.log("Haciendo la validación")

                if(state.value === SECURITY_CODE) { //actualizador 3
                    onConfirm();
                }else{
                    onError();
                }
    
                console.log('terminando la validación');
            }, 3000);
        } 
        console.log('Terminando el efecto')
    },[state.loading]); //actualizador 4
    //necesitamos el [] para que el efecto se ejecute la 1ra vez, y envolvemos a loading para que se ejecute solo cuando haya cambios en el estado de loading

    if (!state.deleted && !state.confirmed){ //recuerda poner el estae.propiedad ya que así es la sintaxis
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Porfavor, write the segure code for know that wants delete</p>
    
    
                {(state.error && !state.loading) &&( //actualizador 5
                    <p>Error: el código es incorrecto</p>
                ) }
    
                {state.loading &&( //actualizador 6
                    <p>Cargando...</p>
                ) }
    
                <input 
                placeholder="código de seguridad"
                value={state.value} //actualizador 7
                onChange={(event)=>{
                    onWrite(event.target.value)
                }}
                />
                <button
                onClick={()=> {
                onCheck();
                }}
                >
                Check
                </button>
            </div>
        );
    } else if (!!state.confirmed && !state.deleted){
        return (
        <React.Fragment>
            <p>Confirmation State ¿Are u segure to delete?</p>
            <button
            onClick={()=> {
             onDelete();
            }}
            >Yes, deleted
            </button>
            <button
            onClick={()=> {
                onReset();
            }}
            >No, I regretted
            </button>
        </React.Fragment>
        );
    }else{
        return (
            <React.Fragment>
                <p>Borrado con éxito</p>
                <button
            onClick={()=> {
                onReset();
            }}
            >Resetear, volver atrás
            </button>
            </React.Fragment>
            );
    }
}

export { UseState };