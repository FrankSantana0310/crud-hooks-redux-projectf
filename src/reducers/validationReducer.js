import {VALIDAR_FORMULARIO,VALIDAR_FORMULARIO_EXITO,VALIDAR_FORMULARIO_ERROR} from '../types';

const initialState = {validationError: true,mostrar:false};
const validationReducer = (state=initialState, action) => {
    switch (action.type) {
        case VALIDAR_FORMULARIO:
            return {...state};
        case VALIDAR_FORMULARIO_EXITO:
            return {...state, validationError:false,  mostrar:false,};
        case VALIDAR_FORMULARIO_ERROR:
           
           return {
               ...state,
               mostrar:true,
           }
    
        default:
           return state;
    }
}

export default validationReducer;