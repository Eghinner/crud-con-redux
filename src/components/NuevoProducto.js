import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {crearNuevoProductoAction} from '../actions/productoActions.js'

const NuevoProducto = () => {

	// state del componente
	const [nombre, setNombre] = useState('')
	const [precio, setPrecio] = useState('')

	// utiliza use dispatch y crea una funcion
	const dispatch = useDispatch()

	// Acceder al state del store
	const cargando = useSelector( state => state.productos.loading )
	const error = useSelector( state => state.productos.error )

	// To back
	let history = useNavigate();

	// Mandar a llamar el action de productoActions
	const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto))

	const submitNuevo = e => {
		e.preventDefault()

		// Validar
		if (nombre.trim()===''||precio<=0) return

		// crear el nuevo producto
		agregarProducto({
			nombre,
			precio
		})

		setNombre('')
		setPrecio('')

		// Back
		history("/");
	}

	return (
		<React.Fragment>
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="card">
						<div className="card-body">
							<h2 className="text-center mb-4 font-weight-bold">
								Agregar Nuevo Producto
							</h2>
							<form
								autoComplete="off"
								onSubmit={submitNuevo}
							>
								<div className="form-group">
									<label>Nombre Producto</label>
									<input
										type="text"
										className="form-control"
										placeholder="Nombre Producto"
										name="nombre"
										value={nombre}
										onChange={e=>setNombre(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<label>Precio Producto</label>
									<input
										type="number"
										className="form-control"
										placeholder="Precio Producto"
										name="precio"
										value={precio}
										onChange={e=>setPrecio(Number(e.target.value))}
									/>
								</div>

								<button
									type="submit"
									className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
									>Agregar
								</button>
								</form>
								{
									// error
									// ? <p
									// 	className="alert alert-danger p2 mt-4 text-center"
									// 	>Error y bla bla bla
									//   </p>
									// : null
								}
								{
									cargando
									? <p>Cargando...</p>
									:null
								}
							</div>
						</div>
					</div>
				</div>
				</React.Fragment>
				)
}

export default NuevoProducto