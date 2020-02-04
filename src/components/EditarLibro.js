import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarLibroAction } from "../actions/librosActions";
import { descargarLibrosAction } from "../actions/librosActions";
import { validationAction } from "../actions/validationActions";
import { useHistory, useParams } from "react-router-dom";

const EditarLibro = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(descargarLibrosAction());
  }, [dispatch]);

  const libro = useSelector(
    state => state.libreria.libros.filter(libro => libro.id === parseInt(id))[0]
  );

  const nombreRef = useRef("");
  const precioRef = useRef("");

  const handleSubmit = e => {
    e.preventDefault();
    const Edited = {
      nombre: nombreRef.current.value,
      precio: precioRef.current.value,
      id: id
    };

    dispatch(validationAction(Edited));
    dispatch(editarLibroAction(Edited));
    history.push("/");
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Editar Producto</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Titulo"
                  defaultValue={libro && libro.nombre}
                  ref={nombreRef}
                />
              </div>
              <div className="form-group">
                <label>Precio del Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio"
                  defaultValue={libro && libro.precio}
                  ref={precioRef}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarLibro;
