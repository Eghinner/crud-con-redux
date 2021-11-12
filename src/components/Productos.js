import React, {useEffect} from 'react'
import Producto from './Producto.js'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProductosAction} from '../actions/productoActions.js'

const Productos = () => {

	// utiliza use dispatch y crea una funcion
	const dispatch = useDispatch()

	useEffect(() => {
		// Mandar a llamar el action de productoActions
		const cargarProductos = () => dispatch(obtenerProductosAction())
		cargarProductos()
	}, [])

	// Acceder al state del store
	const productos = useSelector( state => state.productos.productos )
	const error = useSelector( state => state.productos.error )
	const cargando = useSelector( state => state.productos.loading )

	return (
		<React.Fragment>
			<h2 className="text-center my-5">Listado de Productos</h2>
			{
				error
				? <p
					className="font-weight-bold alert alert-danger p2 mt-4 text-center"
					>Error y bla bla bla
				  </p>
				: null
			}
			{
				cargando
				? <p>Cargando...</p>
				:null
			}
			<table className="table table-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Precio</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{productos.length === 0 ? 'No hay productos' : (
						productos.map(producto=>(
							<Producto
								key={producto.id}
								objeto={producto}
							/>
						))
					)}
				</tbody>
			</table>
		</React.Fragment>
	)
}

export default Productos