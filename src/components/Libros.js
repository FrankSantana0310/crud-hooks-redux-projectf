import React, {Fragment, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { descargarLibrosAction } from '../actions/librosActions';
import Spinner from './Spinner';
import Libro from './Libro';

const Libros = () => {
    const dispatch = useDispatch();

    const loading = useSelector( state => state.libreria.loading);
    const error = useSelector( state => state.libreria.error);
    const libros = useSelector(state => state.libreria.libros )
   
    

    useEffect(() => {
        dispatch(descargarLibrosAction());
    },[dispatch])

   

    return (
       <Fragment>
           {error ? <div className='font-weight-bold alert alert-danger text-center mt-5 py-5'>Error obteniendo los dastos....</div>:
           <Fragment>
                <h2 className='text-center my-5'>Listado de libros</h2>
           <table className='table table-striped'>
                <thead className='bg-pramiry table-dark text-center'>
                <tr>
                    <th scope='col'>Nombre</th>
                    <th  scope='col'>Precio</th>
                    <th  scope='col'>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {libros.map(libro => (
                   <Libro key ={libro.id} libro={libro}/>
               ))}
            </tbody>
             
           </table>
           </Fragment>
           }
          
           {loading ? <Spinner/>: null }
       </Fragment>
    );
};

export default Libros;