import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {editarProductoAction} from '../actions/productoActions.js'

const EditarProducto = () => {

	const dispatch = useDispatch()

	const [producto, setProducto] = useState({
		nombre: '',
		precio: ''
	})

	let history = useNavigate();

	const productoeditar = useSelector(state=>state.productos.productoeditar)
	// if (!productoeditar) return null

	useEffect(() => {
		setProducto(productoeditar)
	}, [productoeditar])

	const {nombre, precio} = producto

	const handleChange = e => {

		setProducto({
			...producto,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()

		dispatch( editarProductoAction(producto) )

		history('/')
	}

	return (
		<React.Fragment>
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="card">
						<div className="card-body">
							<h2 className="text-center mb-4 font-weight-bold">
								Editar Producto
							</h2>
							<form
								onSubmit={handleSubmit}
							>
								<div className="form-group">
									<label>Nombre Producto</label>
									<input
										type="text"
										className="form-control"
										placeholder="Nombre Producto"
										name="nombre"
										value={nombre}
										onChange={handleChange}
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
										onChange={handleChange}
									/>
								</div>

								<button
									type="submit"
									className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
									>Guardar cambios
								</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				</React.Fragment>
	)
}

export default EditarProducto