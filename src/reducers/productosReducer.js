import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_EXITO,
	AGREGAR_PRODUCTO_ERROR,

	COMENZAR_DESCARGAR_PRODUCTOS,
	COMENZAR_DESCARGAR_PRODUCTOS_EXITO,
	COMENZAR_DESCARGAR_PRODUCTOS_ERROR,

	OBTENER_PRODUCTO_ELIMINAR,
	PRODUCTO_ELIMINADO_EXITO,
	PRODUCTO_ELIMINADO_ERROR,

	OBTENER_PRODUCTO_EDITAR,
	COMENZAR_EDICION_PRODUCTO,
	PRODUCTO_EDITADO_EXITO,
	PRODUCTO_EDITADO_ERROR
} from '../types'

const initialState = {
	productos: [],
	error: null,
	loading: false,
	productoeliminar: null,
	productoeditar: null
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
		case COMENZAR_DESCARGAR_PRODUCTOS_EXITO:
			return {
				...state,
				loading: false,
				error: false,
				productos: action.payload
			}
		case COMENZAR_DESCARGAR_PRODUCTOS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		case PRODUCTO_ELIMINADO_ERROR:
		case PRODUCTO_EDITADO_ERROR:
		case OBTENER_PRODUCTO_ELIMINAR:
			return {
				...state,
				loading: true,
				productoeliminar: action.payload
			}
		case PRODUCTO_ELIMINADO_EXITO:
			return {
				...state,
				productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
				productoeliminar: null,
				loading: false
			}
		case OBTENER_PRODUCTO_EDITAR:
			return {
				...state,
				productoeditar: action.payload
			}
		case PRODUCTO_EDITADO_EXITO:
			return {
				...state,
				productoeditar: null,
				productos: state.productos.map(
					producto=>producto.id===action.payload.id
					?producto=action.payload
					:producto
				)
			}
		default:
			return state
	}
}

export default productosReducer