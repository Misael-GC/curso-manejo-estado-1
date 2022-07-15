import React from "react";

const SECURITY_CODE = 'paradigma'; 


function UseReducer({name}){ //creamos el nombre P1
    const [state, dispatch]=React.useReducer(reducer, inicialState); //P2 - función que

    // console.log(state)//delete
    React.useEffect(()=>{
        console.log('iniciando el efecto')

        if(!!state.loading){
            setTimeout(()=>{
                console.log("Haciendo la validación")

                if(state.value === SECURITY_CODE) { //actualizador 3
                    dispatch({ type: 'CONFIRM' });
                }else{
                    dispatch({ type: 'ERROR' });
                }
    
                console.log('terminando la validación');
            }, 3000);
        } 
        console.log('Terminando el efecto')
    },[state.loading]);

    if (!state.deleted && !state.confirmed){
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Porfavor, write the segure code for know that wants delete</p>
    
    
                {(state.error && !state.loading) &&(
                    <p>Error: el código es incorrecto</p>
                ) }
    
                {state.loading &&(
                    <p>Cargando...</p>
                ) }
    
                <input 
                placeholder="código de seguridad"
                value={state.value}
                onChange={(event)=>{
                    dispatch({ type: 'WRITE', payload:event.target.value })
                    // onWrite(event.target.value)
                }}
                />
                <button
                onClick={()=> {
                    dispatch({ type: 'CHECK' })
                // onCheck();
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
                dispatch({ type: 'DELETE' })
            //  onDelete();
            }}
            >Yes, deleted
            </button>
            <button
            onClick={()=> {
                dispatch({ type: 'RESET' })
                // onReset();
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
                dispatch({ type: 'RESET' })
                // onReset();
            }}
            >Resetear, volver atrás
            </button>
            </React.Fragment>
            );
    }
}


const inicialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

const reducerObject = (state, payload) => ({ //P3 Escoje tu reducer de if, switch o object
    'CONFIRM':{
        ...state,
        error: false,
        loading:false,
        confirmed:true,
    },
    'ERROR': {
        ...state,
        error: true,
        loading:false,
    },
    'WRITE':{
        ...state,
        value: payload,
    },
    'CHECK': {
        ...state,
        loading:true,
    },
    'DELETE':{ 
        ...state,
        deleted: true,
     },
     'RESET':{ 
        ...state,
        confirmed: false,
        deleted: false,
        value:'',
     },
});

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type];
    }else{
        return state;
    }
}


export { UseReducer };