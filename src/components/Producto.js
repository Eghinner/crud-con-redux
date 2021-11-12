import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {eliminarProductoAction, obtenerProductoAction} from '../actions/productoActions.js'
import Swal from 'sweetalert2'

const Producto = ({objeto}) => {

	// utiliza use dispatch y crea una funcion
	const dispatch = useDispatch()


	let history = useNavigate();

	const eliminarProducto = id => {
		Swal.fire({
		  title: '¿Seguro?',
		  text: "No hay modo de recuperarlo",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, quiero eliminar',
		  cancelButtonText: 'Cancelar'
		}).then((result) => {
		  if (result.isConfirmed) {
		  	// Pasar al action
		  	dispatch(eliminarProductoAction(id))
		  }
		})
	}

	const toEditar = objeto => {
		dispatch(obtenerProductoAction(objeto))
		history(`productos/editar/${objeto.id}`)
	}


	return (
		<React.Fragment>
			<tr>
			   <td>{objeto.nombre}</td>
			   <td><span className="font-weight-bold">$ {objeto.precio}</span></td>
			   <td className="acciones">
			   		<button
			   			onClick={()=>toEditar(objeto)}
			   		 	className="btn btn-primary mr-2">
			   			Editar
			   		</button>
			   		<button
			   			type="button"
			   			className="btn btn-danger"
			   			onClick={()=>eliminarProducto(objeto.id)}
			   		>Eliminar
			   		</button>
			   </td>
			</tr>
		</React.Fragment>
	)
}

export default Producto