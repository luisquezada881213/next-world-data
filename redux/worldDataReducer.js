const reducer = (state = {data: {}, status: 'loading'}, action) => {
    switch (action.type) {
        case "WORLD_DATA_LOADING": {
            state = {...state, data: {}, status: 'loading'}
            break;
        }
        case "WORLD_DATA_SUCCESS": {
            state = {...state, data: action.payload, status: 'success'}
            break;
        } 
        case "WORLD_DATA_ERROR": {
            state = {...state, data: {}, status: 'error'}
            break;
        }
        default:
            state = {...state, data: {}, status: 'waiting'}
            break; 
    }
    return state
}

export default reducer