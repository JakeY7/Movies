import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'
import reducers from '../reducers'

// const reducer=(state,action)=>{
//     console.log('state',state)
//     return state
// }




const configureStore=(preloadedState)=>{

    const store=createStore(reducers,preloadedState,applyMiddleware(thunk,logger))


    return store

}


export default configureStore

