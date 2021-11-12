import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_EXITO,
	AGREGAR_PRODUCTO_ERROR,
	COMENZAR_DESCARGAR_PRODUCTOS,
	COMENZAR_DESCARGAR_PRODUCTOS_EXITO,
	COMENZAR_DESCARGAR_PRODUCTOS_ERROR
} from '../types'

import ClienteAxios from '../config/ClienteAxios.js'
import Swal from 'sweetalert2'
// ___________________________________________________
export function crearNuevoProductoAction(producto) {
	return async dispatch => {
		dispatch( agragarProducto() )

		try {
			// Insertar en api
			await ClienteAxios.post('/prodctos', producto)

			dispatch( agragarProductoExito(producto) )

			Swal.fire(
			  'Correcto',
			  'El producto se agrago correctamente',
			  'success'
			)
		} catch (err) {
			console.error(err)

			dispatch( agragarProductoError(true) )

			Swal.fire({
			  icon: 'error',
			  title: 'F, pa',
			  text: 'Hubo un error'
			})
		}
	}
}

const agragarProducto = () => ({
	type: AGREGAR_PRODUCTO,
	payload: true
})

// Si todo va bien y guarda en db
const agragarProductoExito = producto => ({
	type: AGREGAR_PRODUCTO_EXITO,
	payload: producto
})
// Si falla
const agragarProductoError = estado => ({
	type: AGREGAR_PRODUCTO_ERROR,
	payload: estado
})
// ____________________________________________________
export function obtenerProductosAction() {
	return async dispatch => {
		dispatch(  cargarProductos() )

		try {
			const respuesta = await ClienteAxios.get('/productos')
		} catch (err) {

		}
	}
}

const cargarProductos = () => ({
	type: COMENZAR_DESCARGAR_PRODUCTOS,
	payload: true
})

const cargarProductosExitoso = () => ({
	type: COMENZAR_DESCARGAR_PRODUCTOS_EXITO
})