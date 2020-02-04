import {
  AGREGAR_LIBRO,
  AGREGAR_LIBRO_EXITO,
  AGREGAR_LIBRO_ERROR,
  DESCARGAR_LIBRO,
  DESCARGAR_LIBRO_EXITO,
  DESCARGAR_LIBRO_ERROR,
  ELIMINAR_LIBRO_ERROR,
  ELIMINAR_LIBRO_EXITO,
  ELIMINAR_LIBRO,
  OBTENER_PRODUCTO_EDITAR,
  OBTENER_PRODUCTO_EDITAR_EXITO,
  OBTENER_PRODUCTO_EDITAR_ERROR,
  EDITAR_LIBRO_ERROR,
  EDITAR_LIBRO_EXITO,
  EDITAR_LIBRO
} from "../types";

const initiaState = {
  libros: [],
  loading: null,
  error: false
};
const libroReducer = (state = initiaState, action) => {
  switch (action.type) {
    case AGREGAR_LIBRO_EXITO:
      return {
        ...state,
        libros: [...state.libros, action.paylaod]
      };
    case AGREGAR_LIBRO_ERROR:
      return {
        ...state,
        error: true
      };
    case AGREGAR_LIBRO:
      return {
        ...state
      };

    //////////////////////////////////////////////
    //DESCARGAR LIBRO
    case DESCARGAR_LIBRO:
      return {
        ...state,
        loading: true
      };
    case DESCARGAR_LIBRO_EXITO:
      return {
        ...state,
        libros: action.payload,
        loading: false,
        error: false
      };
    case DESCARGAR_LIBRO_ERROR:
      return {
        ...state,
        libros: [],
        loading: false,
        error: true
      };

    ///////////////////////////////////////////////
    //ELIMINAR LIBRO
    case ELIMINAR_LIBRO:
      return {
        ...state
      };

    case ELIMINAR_LIBRO_EXITO:
      return {
        ...state,
        libros: state.libros.filter(libro => libro.id !== action.payload)
      };

    case ELIMINAR_LIBRO_ERROR:
      return {
        ...state
      };

     //OBtener Libro 
     case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        error:null,
      };
     case OBTENER_PRODUCTO_EDITAR_EXITO:
      return {
        ...state,
       producto: action.payload
      };
      case OBTENER_PRODUCTO_EDITAR_ERROR:
          return {
            ...state,
            error:true,
          };
     
          

    //////////////////////////////////////////////////
    //EDITAR LIBRO
    case EDITAR_LIBRO_EXITO:
      console.log(`id in reducer` + action.payload.id);
      const newState = state.libros.map(libro => {
        if (libro.id === parseInt(action.payload.id)) {
          return {
            nombre: action.payload.nombre,
            precio: action.payload.precio,
            id: action.payload.id
          };
        } else {
          return libro;
        }
      });
      console.log(`this is newState: ${JSON.stringify(newState)}`);
      return {
        ...state,
        libros: newState
      };
    case EDITAR_LIBRO_ERROR:
      return {
        ...state
      };
    case EDITAR_LIBRO:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default libroReducer;
