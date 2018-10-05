
export const addToFavorite=id=>(dispatch,getState)=>{
   // console.log('getState',getState())
    const {mylist}=getState()||[]
   // const mylist=state['mylist']
    if(mylist.find((like)=>like.id==id.id))return

    dispatch({
        type: "ADD_TO_FAVORITE",
        payload: id
    })
}

export const  deleteFromFavorite=(id)=>(dispatch,getState)=> {
    //const {recommendations}=getState()||[]

    dispatch( {
        type: "DELETE_FROM_FAVORITE",
        payload: id
    })
}

