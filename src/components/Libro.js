import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { eliminarLibroAction } from "../actions/librosActions";
import Swal from 'sweetalert2'

const Libro = ({ libro }) => {
  const dispatch = useDispatch();

  const deleteLibro = id => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#56CC9D',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
            dispatch(eliminarLibroAction(id));
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })



    
  };
  return (
    <tr>
      <td className="text-center">{libro.nombre}</td>

      <td className="text-center">
        <span className='badge badge-warning'>
        <span className="font-weight-bold badge badge-warning ">$</span>
        {libro.precio}
        </span>
      </td>
      <td className="text-center">
        <Link
          className="btn btn-success mr-3"
          to={`/libros/editar/${libro.id}`}
        >
          Edit
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteLibro(libro.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Libro;
