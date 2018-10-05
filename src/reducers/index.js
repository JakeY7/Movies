import {combineReducers} from 'redux'


function mylist(state=[], action) {

    switch (action.type) {
        case "ADD_TO_FAVORITE":
            //console.log('mylist',state)
            return [...state,{...action.payload}]

        case "DELETE_FROM_FAVORITE":

            return state.filter(item=>item.id!==action.payload.id);

        default:
            return state;
    }
}


function recommendations(state=[], action) {
    //console.log('reducers',state)
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            //console.log('recommendations',action.payload.id,state)
           return state.filter(item=>item.id!==action.payload.id)

        case "DELETE_FROM_FAVORITE":

            return [...state,{...action.payload}]

        default:
            return state;
    }
}

export default combineReducers({
    mylist,
recommendations
})



