import {VALIDAR_FORMULARIO,VALIDAR_FORMULARIO_EXITO,VALIDAR_FORMULARIO_ERROR} from '../types';

export const validationAction = (libro) => {
    return (dispatch) => {
        dispatch(validarFormulario());
       
        if(libro.nombre !== '' && libro.precio !== ''){
            dispatch(validarFormularioExito())
        }else{
            dispatch(validarFormularioError());
           return;
        }
    }
}

const validarFormulario = () => ({type: VALIDAR_FORMULARIO});
const validarFormularioError = () => ({type: VALIDAR_FORMULARIO_ERROR});
const validarFormularioExito = () => ({type: VALIDAR_FORMULARIO_EXITO});
