const initState = {
    users: [],
    loading: true
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'USERS_LOADED':
            return{
                users: action.payload,
                loading: false
            }
        default:
            return state
    }
    
}

export default usersReducer