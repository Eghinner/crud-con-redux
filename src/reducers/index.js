import {combineReducers} from 'redux'
import productosReducer from './productosReducer.js'

export default combineReducers({
	productos: productosReducer
})