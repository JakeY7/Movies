import React,{Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'
import App from './containers/App'
import movies from './api/movies.json'


const initialState=movies
render(<Provider store ={configureStore(initialState)}>

    <App />
</Provider>,document.getElementById('app'))
