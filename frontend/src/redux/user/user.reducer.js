import actionType from "./user.action.type"
const initialState = {
    currentUser:null
}
const userReducer = (state = initialState,action) =>{
    switch(action.type){
        case actionType.setCurrentUser:{
            
            return{
                ...state,
                currentUser:action.payload
            }
        }
        default:{
           
            return state
        }
    }
}
export default userReducer