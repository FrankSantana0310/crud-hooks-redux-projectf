import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
          <h1> <Link to='/'className='text-white' > Crud, React, Redux-Hooks, Rest API and Axios</Link></h1>
          <Link to='/libros/nuevo' className='btn btn-danger nuevo-post d-bolck d-md-inline-block'>Agregar Libro &#43;</Link>
        </nav>
    );
};

export default Header;