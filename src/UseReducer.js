import React from "react";

const SECURITY_CODE = "paradigma";

const inicialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const actionTypes = {
  confirm: "CONFIRM",
  error: "ERROR",
  delete: "DELETE",
  write: "WRITE",
  reset: "RESET",
};

const reducerObject = (state, payload) => ({
  //P3 Escoje tu reducer de if, switch o object
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.write]: {
    ...state,
    value: payload,
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
  },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

function UseReducer({ name }) {
  //creamos el nombre P1
  const [state, dispatch] = React.useReducer(reducer, inicialState); //P2 - función que

  // const onConfirm = () =>{
  //    dispatch({ type: actionTypes.confirm })
  // }
  const onConfirm = () => dispatch({ type: actionTypes.confirm });
  const onError = () => dispatch({ type: actionTypes.error });
  const onCheck = () => dispatch({ type: actionTypes.check });
  const onDelete = () => dispatch({ type: actionTypes.delete });
  const onReset = () => dispatch({ type: actionTypes.reset });
  
  const onWrite = ({ target: { value } }) => {  //aqui no conviene eliminar las llaves
    dispatch({ type: actionTypes.write, payload: value });
  };

  // const onWrite = (newValue) =>{
  //     dispatch({ type: actionTypes.write, payload: newValue })
  // }

  React.useEffect(() => {
    console.log("iniciando el efecto");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }

        console.log("terminando la validación");
      }, 3000);
    }
    console.log("Terminando el efecto");
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Porfavor, write the segure code for know that wants delete</p>

        {state.error && !state.loading && <p>Error: el código es incorrecto</p>}

        {state.loading && <p>Cargando...</p>}

        <input
          placeholder="código de seguridad"
          value={state.value}
          // onChange={(event)=>{
          //     onWrite(event.target.value)
          // }}
          onChange={onWrite}
        />
        <button onClick={onCheck}>Check</button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>Confirmation State ¿Are u segure to delete?</p>
        <button onClick={onDelete}>Yes, deleted</button>
        <button onClick={onReset}>No, I regretted</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Borrado con éxito</p>
        <button onClick={onReset}>Resetear, volver atrás</button>
      </React.Fragment>
    );
  }
}

export { UseReducer };
