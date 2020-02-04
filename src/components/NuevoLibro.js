import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarLibroAction } from "../actions/librosActions";
import { validationAction } from "../actions/validationActions";
import { useHistory } from "react-router-dom";

const NuevoLibro = props => {
  let history = useHistory();
  const initialState = {
    nombre: "",
    precio: ""
  };
  const [libro, setLibro] = useState(initialState);

  const dispatch = useDispatch();
 const  validationError = useSelector(state => state.validation.validationError);
 const  mostrar = useSelector(state => state.validation.mostrar);


  const handleInput = e =>
    setLibro({
      ...libro,
      [e.target.name]: e.target.value
    });
  const handleSubmit = e => {
    e.preventDefault();
    validarFormulario(libro);
  
    if (validationError === true) {
      return;
    }
    agregarLibro(libro);
    setLibro(initialState);
    history.push("/");
  };

  const agregarLibro = libro => dispatch(agregarLibroAction(libro));
  const validarFormulario = libro => dispatch(validationAction(libro));

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Libro
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Nombre">Nombre del libro</label>
                <input
                  onChange={handleInput}
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Libro"
                  id="Nombre"
                  value={libro.nombre}
                  name="nombre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Precio">Precio del libro</label>
                <input
                  onChange={handleInput}
                  type="text"
                  className="form-control"
                  id="Precio"
                  placeholder="Precio del libro"
                  value={libro.precio}
                  name="precio"
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                value="Agregar"
              />
            </form>
            {mostrar ? (
              <div className="alert alert-danger fotn-weight-bold mt-4 text-center">
                Todos Los campos son obligatiorios
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoLibro;
