import actionType from "./user.action.type"

const setCurrentUser = (user) =>({
    type:actionType.setCurrentUser,
    payload:user
})
export default setCurrentUser;