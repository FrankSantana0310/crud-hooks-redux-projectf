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
  EDITAR_LIBRO_EXITO,
  EDITAR_LIBRO_ERROR,
  EDITAR_LIBRO,
} from "../types";
import clienteAxios from "../config/axios";

//////////////////////////////////
//Agregar Libros

export const agregarLibroAction = libro => {
  return async dispatch => {
    try {
      dispatch(agregar());
      const libroAdded = await clienteAxios.post("/libros", libro);
      if (libroAdded.status === 201) dispatch(agregarExito(libro));
    } catch (error) {
      console.log("entro2");
      dispatch(agregarError());
    }
  };
};

export const agregarExito = libroParameter => ({
  type: AGREGAR_LIBRO_EXITO,
  paylaod: libroParameter
});

export const agregarError = () => ({ type: AGREGAR_LIBRO_ERROR });

export const agregar = () => ({ type: AGREGAR_LIBRO });

////////////////////////////////
//Descargar  Libros

export const descargarLibrosAction = () => {
  return async dispatch => {
    try {
      dispatch(descargarLibro());
      const libros = await clienteAxios("/libros");
      //Solo para ver el Snnipet quitar este codigo luego.
      
        if (libros.status === 200) {
          dispatch(descargarLibroExito(libros.data));
        }
      
    } catch (error) {
      dispatch(descargarLibroError());
    }
  };
};

export const descargarLibro = () => ({
  type: DESCARGAR_LIBRO
});

export const descargarLibroError = () => {
  return {
    type: DESCARGAR_LIBRO_ERROR
  };
};

export const descargarLibroExito = libros => {
  return {
    type: DESCARGAR_LIBRO_EXITO,
    payload: libros
  };
};

///////////////////////////
//Eliminar Libros

export const eliminarLibroAction = id => {
  console.log(id);
  return async dispatch => {
    dispatch(eliminarLibro());
    try {
      let eliminar = await clienteAxios.delete(`/libros/${id}`);
      if (eliminar.status === 200) {
        dispatch(eliminarLibroExito(id));
      }
    } catch (error) {
      dispatch(eliminarLibroError());
    }
  };
};

const eliminarLibro = () => ({
  type: ELIMINAR_LIBRO
});

const eliminarLibroExito = id => {
  return {
    type: ELIMINAR_LIBRO_EXITO,
    payload: id
  };
};
const eliminarLibroError = () => {
  return {
    type: ELIMINAR_LIBRO_ERROR
  };
};

//////////////////////////////////////
//OBTENER PRODUCTO EDITAR
export const obtenerProductoEditarAction = id => {
  return (dispatch) => {

  }
}

export const obtenerProductoEditar = () => (
  {
    type: OBTENER_PRODUCTO_EDITAR
  }
)

export const obtenerProductoEditarExito = producto => (
  {
    type: OBTENER_PRODUCTO_EDITAR_EXITO,
    payload: producto,
  }
)

export const obtenerProductoEditarError = () => (
  {
    type: OBTENER_PRODUCTO_EDITAR_ERROR,
  }
)



///////////////////////////////////////
//EDITAR LIBROS

export const editarLibroAction = libro => {
  console.log(`Este es libro en Libroaction ${JSON.stringify(libro)}` );
    return async dispatch => {
      try {
       
        dispatch(editar());
        const libroEdited = await clienteAxios.put(`/libros/${libro['id']}`, libro);
       console.log(libroEdited);
        if (libroEdited.status === 200){
          console.log('entro primero')
          dispatch(editarExito(libro))
        };
      } catch (error) {
       
        dispatch(editarError());
      }
    };
  };
  
  export const editarExito = libro => ({
    type: EDITAR_LIBRO_EXITO,
    payload: libro
  });
  
  export const editarError = () => ({ type: EDITAR_LIBRO_ERROR });
  
  export const editar = () => ({ type: EDITAR_LIBRO });
  