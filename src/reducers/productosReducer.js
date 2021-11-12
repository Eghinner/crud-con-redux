import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_EXITO,
	AGREGAR_PRODUCTO_ERROR,
	COMENZAR_DESCARGAR_PRODUCTOS,
	COMENZAR_DESCARGAR_PRODUCTOS_EXITO,
	COMENZAR_DESCARGAR_PRODUCTOS_ERROR
} from '../types'

const initialState = {
	productos: [],
	error: null,
	loading: false
}

 const productosReducer = (state=initialState, action) => {
	switch(action.type) {
		case AGREGAR_PRODUCTO:
			return {
				...state,
				loading: action.payload
			}
		case AGREGAR_PRODUCTO_EXITO:
			return {
				...state,
				loading: false,
				productos: [...state.productos, action.payload]
			}
		case AGREGAR_PRODUCTO_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		case COMENZAR_DESCARGAR_PRODUCTOS:
			return {
				...state,
				loading: action.payload
			}
		default:
			return state
	}
}

export default productosReducer