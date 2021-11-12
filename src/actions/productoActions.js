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
			  title: 'Malas noticias',
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
			dispatch( cargarProductosExitoso(respuesta.data) )
		} catch (err) {
			console.error(err)
			dispatch( cargarProductosError() )
		}
	}
}

const cargarProductos = () => ({
	type: COMENZAR_DESCARGAR_PRODUCTOS,
	payload: true
})

const cargarProductosExitoso = productos => ({
	type: COMENZAR_DESCARGAR_PRODUCTOS_EXITO,
	payload: productos
})

const cargarProductosError = () => ({
	type: COMENZAR_DESCARGAR_PRODUCTOS_ERROR,
	payload: true
})
// _______________________________________________
export function eliminarProductoAction(id) {
	return async dispatch => {
		dispatch(  obtenerProductoEliminar(id) )

		try {
			await ClienteAxios.delete(`/productos/${id}`)
			dispatch( eliminarProductoExito() )

			Swal.fire(
			  'Eliminado',
			  'El producto a sido eliminado exitosamente',
			  'success'
			)
		} catch (err) {
			console.error(err)
			dispatch( eliminarProductoError() )
		}
	}
}

const obtenerProductoEliminar = id => ({
	type: OBTENER_PRODUCTO_ELIMINAR,
	payload:id
})

const eliminarProductoExito = () => ({
	type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
	type: PRODUCTO_ELIMINADO_ERROR,
	payload: true
})
// _______________________________________________________________________
export function obtenerProductoAction(producto) {
	return dispatch => {
		dispatch( obtenerProductoEditar(producto) )
	}
}

const obtenerProductoEditar = producto => ({
	type: OBTENER_PRODUCTO_EDITAR,
	payload: producto
})
// ______________________________________________________________________
export function editarProductoAction(producto) {
	return async dispatch => {
		dispatch( editarProducto() )

		try {
			await ClienteAxios.put(`/productos/${producto.id}`, producto)
			editarProductoExito(producto)
		} catch (err) {
			console.error(err)
		}
	}
}

const editarProducto = () => ({
	type: COMENZAR_EDICION_PRODUCTO
})

const editarProductoExito = producto => ({
	type: PRODUCTO_EDITADO_EXITO,
	payload: producto
})